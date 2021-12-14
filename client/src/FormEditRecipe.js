import React from "react";
import Button from "./button/Button";

const FormEditRecipe = ({ editRecipe, thisRecipe }) => {
  const [values, setValues] = React.useState({
    title: thisRecipe.title,
    image: thisRecipe.image,
    description: thisRecipe.description,
    phone: thisRecipe.phone,
    year: thisRecipe.year,
  });

  const updateRecipe = (event) => {
    event.preventDefault();
    const recipe = {
      ...thisRecipe,
      title: values.title,
      image: values.image,
      description: values.description,
      phone: values.phone,
      year: values.year,
    };
    editRecipe(recipe);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Edit Museum</h3>
      <form onSubmit={updateRecipe}>
        <input
          type="text"
          placeholder="title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="image"
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

        <Button type="submit">Update Museum</Button>
      </form>
    </div>
  );
};

export default FormEditRecipe;
