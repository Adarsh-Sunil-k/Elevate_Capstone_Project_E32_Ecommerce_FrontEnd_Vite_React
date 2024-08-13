import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Card, Heading, CardBody, CardFooter , Stack, Divider, ButtonGroup,Button, Text, Image} from '@chakra-ui/react'

function Products() {
    const [products, setProducts] = useState([]);

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

    return (
        <div>
            {products.map((products)=>(
        <Card className='max-w-fit' key={products._id}>
  <CardBody className='items-center justify-center'>
    <Image
      src={products.image}
      alt={products.name}
      borderRadius='lg'
      className='size-52'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{products.name}</Heading>
      <Text>
        {products.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {products.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
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
