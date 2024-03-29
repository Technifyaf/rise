import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import SecondaryBanner from 'sections/secondary-banner';
import Articles from 'sections/articles';
export default function News() {
    return (
      <ThemeProvider theme={theme}>
        <StickyProvider>

            <Layout>
              <SEO
                description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
                title="Rise international"
              />
             <SecondaryBanner/>
             <Articles/>
          
            </Layout>
         
        </StickyProvider>
      </ThemeProvider>
    );
}