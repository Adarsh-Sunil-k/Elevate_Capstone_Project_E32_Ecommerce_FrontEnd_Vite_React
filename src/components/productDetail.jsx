import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Heading, CardBody, Stack, Text, Image } from '@chakra-ui/react';

const ProductDetailPage = ()=> {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/products/:{id}");
        console.log(res.data);
        
        setProduct(res.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log("Error fetching product details:", error);
        setLoading(false); // Even in case of error, stop the loading state
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state while fetching data

  if (!product) return <div>Product not found</div>; // Fallback if product is not found

  return (
    <Card>
      <CardBody className="items-center justify-center">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            borderRadius="lg"
          />
        )}
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Rs {product.price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ProductDetailPage;
