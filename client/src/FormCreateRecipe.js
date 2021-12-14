import React from "react";
import Button from "./button/Button";
import styled from "styled-components";

export const Formtitle = styled.div `
 color: black;
`

const FormCreateRecipe = ({ addRecipe }) => {
  const [values, setValues] = React.useState({
    title: "",
    image: "",
    description: "",
    adress: "",
    phone: "",
    year: "",
  });

  const createRecipe = (event) => {
    event.preventDefault();
    const recipe = {
      title: values.title,
      image: values.image,
      description: values.description,
      adress: values.adress,
      phone: values.phone,
      year: values.year,
    };
    addRecipe(recipe);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <Formtitle>
      <h3 >Add Museums</h3>
      </Formtitle>
      <form onSubmit={createRecipe}>
        <input
          type="text"
          placeholder="Museum name"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Select museum image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="adress"
          value={values.adress}
          name="adress"
          onChange={handleInputChange}
        />
         <input
          type="text"
          placeholder="phone"
          value={values.phone}
          name="phone"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="year"
          value={values.year}
          name="year"
          onChange={handleInputChange}
        />

        <Button type="submit">Add Recipe</Button>
      </form>
    </div>
  );
};

export default FormCreateRecipe;