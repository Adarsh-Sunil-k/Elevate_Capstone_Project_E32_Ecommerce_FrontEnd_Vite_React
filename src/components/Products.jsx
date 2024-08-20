import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Card, Heading, CardBody, CardFooter , Stack, Divider, ButtonGroup,Button, Text, Image} from '@chakra-ui/react'

const Products = ()=> {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const GetAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/v1/products/get-all-products");
                const data = res.data;  
                
                console.log("Fetched data:", data); 

                setProducts(data);
                
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };
        GetAllProducts(); 
    }, []);

    const handleBuyNowClick = (productId) => {
      navigate(`/products/${productId}`); // Redirect to product detail page
    };
    // order api call
    // const paymentHandler = async(event,productId)=>{
    //   const selectedProduct = Products.find((product)=> product.id === productId );
    //   const response = await axios.post("http://localhost:4000/api/v1/payments/payments",
    //     {amount : selectedProduct.price}
    //   );
    // }
    // verify

    // const  order = await response.data.data;
    // console.log(order);
    // const option = {
    //   key: import.meta.env.VITE_sOME_KEY,
    //   amount: order.amount,
    //   currency: order.currency,
    //   name: "adarsh",
    //   description: "test transaction",
    //   image: "http://ibb.co/5y3m33n/test.png",
    //   order_id : order.id,
    //   handler: async function (response){
    //     const body = {...response};
    //   }
    // }
    
    return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-3">
  {products.map((product) => (
    <Card className="max-w-fit" key={product._id}>
      <CardBody className="items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          borderRadius="lg"
          className="size-52"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Rs  {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue"
          onClick={() => handleBuyNowClick(product._id)}
          >
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))}
</div>

    );
}

export default Products;
