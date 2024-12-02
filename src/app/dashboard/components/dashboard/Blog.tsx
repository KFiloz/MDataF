import { CardContent, Typography, Grid, Rating } from "@mui/material";
import BlankCard from "@/app/dashboard/components/shared/BlankCard";
import Image from "next/image";

const ecoCard = [
  {
    title: "Boat Headphone",
    photo: "/images/products/s4.jpg",
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: "MacBook Air Pro",
    photo: "/images/products/s5.jpg",
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
];

const Blog = () => (
  <Grid container spacing={3}>
    {ecoCard.map((item, index) => (
      <Grid item xs={12} md={6} key={index}>
        <BlankCard>
          <Image src={item.photo} alt={item.title} width={300} height={200} />
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              Precio: ${item.price}
            </Typography>
            <Rating value={item.rating} readOnly />
          </CardContent>
        </BlankCard>
      </Grid>
    ))}
  </Grid>
);

export default Blog;
