

import CategoryLisitingWrapper from "../Category/List/CategoryListingWrapper"
import HomeHeader from "../components/Header/HomeHeader"
import AddSubcategoryWrapper from "../Subcategory/Add/AddSubcategoryWrapper"

const HomeLayout = () => {



  return (
<>

<HomeHeader/>
<AddSubcategoryWrapper/>
<CategoryLisitingWrapper/>
</>

  )
}

export default HomeLayout