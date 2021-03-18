import BlockTitle from "components/block-title"
import OpportunitiesCard from "components/opportunities-card";
import React from 'react';
import { Box, Grid } from "theme-ui"


const listOfEvents = [
    {
        title : 'Become a fellow'

    },
    {
        title : 'international student opportunities'
    },
    {
        title : 'Corperate opportunities'
    },
    {
        title : 'Start fundraising'
    }, {
        title : 'volunteer or mentor'
    }
]
const EventSection = ()=>{
    return(
        <Box sx={styles.opportunitiesBox}>
        <BlockTitle
        title="Join us"
        text={
          'We collaborate with talent in local communitiies to educate and empower them to solve the challenges they face in a susttainable way'
        
        }
      />

        <Grid sx={styles.grid}>
        {listOfEvents.map((event, index)=>(
            <OpportunitiesCard
            key={index}
            title = {event.title}
            />
        ))}
        </Grid>

        </Box>

      
    )
}

export default EventSection

const styles = {
opportunitiesBox :{
  // display : 'flex',
//  backgroundColor : 'green',
    paddingTop: [0, null, null, null, 50, 20],
    paddingBottom: [80, null, null, null, 150],
   // paddingLeft : 100
    //justifyContent : 'space-between'

},
grid: {
    margin: [10,null,null,null],
  //  backgroundColor:'gold',
   // mt: [0, null, -6, null, -4],
    gridGap: ['35px 30px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },

}

