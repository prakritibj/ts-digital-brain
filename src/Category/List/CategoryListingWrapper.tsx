import React from 'react';
import { useDeleteCategoryMutation, useGetCategoryQuery } from '../../Slices/categorySlice';
import CategoryListing from './CategoryListing';

const CategoryListingWrapper: React.FC = () => {
    const token = localStorage.getItem("auth")
  const { data, isLoading, error } = useGetCategoryQuery({token});
  const [deleteCategory] = useDeleteCategoryMutation();


  console.log(data, "data");

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error loading categories:</p>
  }

  const handleDeleteCategory = async (id: string) => {
    try {
      const res = await deleteCategory({id,token})
      console.log('Category deleted:', res);
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  return (
    <>
      {data ? (
        <CategoryListing data ={data} deleteCategory={handleDeleteCategory} />
      ) : (
        <p>No categories available</p>
      )}
    </>
  );
};

export default CategoryListingWrapper;
