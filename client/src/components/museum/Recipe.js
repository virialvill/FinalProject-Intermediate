import React from "react";
import {Link} from 'react-router-dom';
import {Box, Oneitem, Twoitem, Threeitem, Fouritem, Fiveitem, Sixitem } from './style';

function Recipe({ recipe }) {
  const { title, year, description, adress,  phone, image, _id } = recipe;
  return (
    <summary>
      <Box>
       <Oneitem>
          <img src={`img/${image}`} alt={title} />
          </Oneitem>
      
      <Twoitem>
        <h2>
        <Link to={_id}>{title}</Link>
        </h2>
        </Twoitem>

      <Threeitem>
        <p>{description}</p>
        </Threeitem>

      <Fouritem>
      <h3>Adress</h3>
      <p>{adress}</p>
      </Fouritem> 

      <Fiveitem>
      <h3>Phone</h3>
      <p>{phone}</p>
      </Fiveitem>

      <Sixitem>
      <small>Published: {year}</small>
      </Sixitem>

      </Box>

    </summary>
  );
}

export default Recipe;
