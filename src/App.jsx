import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { api, getProductList } from "./utils/api";
import { useDebounce } from "./hooks/hooks";


// const [example, setExample] = useState();




function App() {

  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [user, setUser] = useState({});

  const filteredCards = (cards) => {
    return cards.filter(e => e.author._id === '622bd81b06c7d323b8ae4614' || e.author._id === '6249a24d392d360b78ab233a')
  }

  const debounceValueInApp = useDebounce(search)


  const handleProductLike = async (product, isLiked) => {
    const updatedCard = await api.changeProductLike(product._id, isLiked);

    const newCards = cards.map(e => e._id === updatedCard._id ? updatedCard : e);
    const index = cards.findIndex(e => e._id === updatedCard._id);
    if (index !== -1) {
      setCards(state => [...state.slice(0, index), updatedCard, ...state.slice(index + 1)])
    }
    // setCards([...newCards])

    // const deleteCard = () => {
    //   const newCards = cards.map(e => e._id === updatedCard._id ? updatedCard : e)
    //   setCards([...newCards])
    // }
    // const addCard = () => {

    //   // const newCards = cards.map(e => {
    //   //   if (e._id === updatedCard._id) {
    //   //     return updatedCard
    //   //   } 
    //   //   return e
    //   // })
    //   const newCards = cards.map(e => e._id === updatedCard._id ? updatedCard : e)
    //   setCards([...newCards])
    // }
    // isLiked ? deleteCard() : addCard()

    // console.log({ updatedCard });
  }



  useEffect(() => {

    if (debounceValueInApp === undefined) return;
    api.searchProducts(debounceValueInApp)
      .then((data) => setCards(filteredCards(data)))

  }, [debounceValueInApp])

  useEffect(() => {
    Promise.all([api.getUserInfo(), getProductList()]).then(([userData, data]) => {
      setUser(userData);
      setCards(filteredCards(data.products));
    });

  }, [])




  return (
    <div className="App">

      <Header setSearch={setSearch}>
      </Header>
      <main className=" container ">
        <CardList cards={cards} userId={user._id} handleLike={handleProductLike} />
      </main>
      <Footer />

    </div>
  );
}


export default App;
