import { SectionWrapper, Features, Download } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFT's Start selling and Growing"
        description="Buy, Store, collect NFT's exchange and earn crypto, 
        Join 25M+ people using Pronef marketplace"
        showBtn
        mokeupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of Pronef NFT Marketplace, Smooth constant colors of a fluent 
        UI design."
        mokeupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="Pronef is built using Expo which runs natively on all users devices.
        You can easily get you app into people's hands"
        mokeupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to Showcase the store"
        description="This app contains two screens. 
        The first screen lists all NFT's 
        while the second one shows the details of a specific NFT."
        mokeupImg={assets.mockup}
        banner="banner02"
      />

      <Download Link="https://github.com/webdevhrithik/Pronef" />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Developed By {'  '}
          <span className="bold">
            <a href="https://github.com/webdevhrithik" target="_blank">
              webdevhrithik
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default App;
