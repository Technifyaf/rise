import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import TeamCard from '../components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import SectionHeader from '../components/sectionheading';


import Member1 from '../assets/team/member-1.png';
import Member2 from '../assets/team/member-2.png';
import Member3 from '../assets/team/member-3.png';
import Member4 from '../assets/team/member-4.png';
import Member5 from '../assets/team/member-5.png';
import Member6 from '../assets/team/member-6.png';

const data = [
    {
      id: 1,
      imgSrc: Member1,
      altText: 'Saimon Harmer',
      title: 'Saimon Harmer',
      designation: 'CEO and Founder',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 2,
      imgSrc: Member2,
      altText: 'Aaron Nunez',
      title: 'Aaron Nunez',
      designation: 'Founder',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 3,
      imgSrc: Member3,
      altText: 'Aaron Nunez',
      title: 'Aaron Nunez',
      designation: 'Web Designer',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 4,
      imgSrc: Member4,
      altText: 'Lina Jutila',
      title: 'Lina Jutila',
      designation: 'Web Developer',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 5,
      imgSrc: Member5,
      altText: 'Saimon Harmer',
      title: 'Saimon Harmer',
      designation: 'CEO and Founder',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 6,
      imgSrc: Member6,
      altText: 'Aaron Nunez',
      title: 'Aaron Nunez',
      designation: 'Web Designer',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
  ];

const Team = () => {
	return (

    <Container sx = {styles.wrapper}>
           <SectionHeader
          slogan="Meet the team"
          title="The most qualified and talented individuals"
          
        />

      
          <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
            
	</Container>
	);
};

export default Team;

const styles = {
  wrapper: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background',
	},
	
    grid: {
   

        mt: [0, null, -6, null, -4],
        gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
        gridTemplateColumns: [
          'repeat(2,1fr)',
          null,
          'repeat(2,1fr)',
          null,
          'repeat(3,1fr)',
        ],
      },
};
