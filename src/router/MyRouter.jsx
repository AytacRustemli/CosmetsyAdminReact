import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../components/Blog/CreateBlog';
import UpdateBlog from '../components/Blog/UpdateBlog';
import CreateCategory from '../components/Category/CreateCategory';
import CreateProduct from '../components/Product/CreateProduct';
import UpdateProduct from '../components/Product/UpdateProduct';
import BlogScreen from '../pages/BlogScreen';
import CategoryScreen from '../pages/CategoryScreen';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import OrderScreen from '../pages/OrderScreen';
import ProductScreen from '../pages/ProductScreen';
import UpdateCategory from './../components/Category/UpdateCategory';
import CommentScreen from './../pages/CommentScreen';
import BrandScreen from './../pages/BrandScreen';
import CreateBrand from '../components/Brand/CreateBrand';
import UpdateBrand from '../components/Brand/UpdateBrand';

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/category' element={<CategoryScreen />}/>
        <Route path='/category/create' element={<CreateCategory />}/>
        <Route path='/category/update/:id' element={<UpdateCategory />}/>
        <Route path='/product' element={<ProductScreen />}/>
        <Route path='/product/create' element={<CreateProduct />}/>
        <Route path='/product/update/:id' element={<UpdateProduct />}/>
        <Route path='/blog' element={<BlogScreen />}/>
        <Route path='/blog/create' element={<CreateBlog />}/>
        <Route path='/blog/update/:id' element={<UpdateBlog/>}/>
        <Route path='/order' element={<OrderScreen />}/>
        <Route path='/comment' element={<CommentScreen />}/>
        <Route path='/brand' element={<BrandScreen />}/>
        <Route path='/brand/create' element={<CreateBrand />}/>
        <Route path='/brand/update/:id' element={<UpdateBrand />}/>

    </Routes>
  )
}

export default MyRouter