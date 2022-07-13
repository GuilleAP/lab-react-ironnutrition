import { useState } from "react";

import { Divider, Input } from 'antd';


function Search(props) {

    const [name, setName] = useState('');

    const handlerNameInput = (e) => {
        setName(e.target.value)
        props.searchFood(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={name} type="text" onChange={handlerNameInput} />
    </>
  );
}

export default Search;
