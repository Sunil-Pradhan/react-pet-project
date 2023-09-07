import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          '& h4': { fontWeight: 'bold', my: 2, fontSize: '2rem' },

          '& p': {
            textAlign: 'justify',
          },
          '@media(max-width:600px)': {
            mt: 0,
            '& h4': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          provident odit, vitae accusamus voluptate fuga dolor molestiae
          incidunt ad quos non molestias odio. Vero impedit id, facilis, iste
          quae, totam doloribus iusto necessitatibus soluta velit vitae
          inventore! Cum eos, adipisci ab sit quibusdam impedit provident
          voluptatibus nulla illum harum inventore. Illo numquam totam
          voluptates, quidem iste eum accusamus temporibus illum quibusdam
          aspernatur, quos animi unde, repudiandae repellendus. Id cum
          praesentium, nihil perferendis quaerat earum explicabo ipsa
          perspiciatis esse eaque velit! Atque facilis, maxime tempore quia
          dolor ratione natus deserunt perferendis iste iure consequatur,
          veniam, fuga quisquam accusamus illo rerum incidunt.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          cupiditate recusandae eum porro sed sint commodi perferendis placeat.
          Minus doloribus eligendi similique labore incidunt pariatur maiores
          quidem hic quam maxime, error expedita? Possimus saepe labore nisi
          atque voluptate, neque accusamus alias, optio amet distinctio modi
          recusandae dolore odio eius quis architecto doloremque tempora
          dignissimos ut cupiditate? A, maxime sunt laudantium, quam culpa
          laborum, cumque amet ex recusandae vel assumenda error placeat
          repudiandae similique unde. Vero optio corrupti accusantium? Illum
          mollitia, magnam repellat blanditiis voluptate quam numquam obcaecati
          nesciunt quasi culpa sed laborum cupiditate? Fugiat harum, quos non
          repellendus nemo magni.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
