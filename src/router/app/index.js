import Sounds from '../../modules/app/sounds/router';
import Weather from '../../modules/app/weather/router';
import Contact from '../../modules/app/contact/router';
import Donate from '../../modules/app/donate/router';
import Categories from '../../modules/app/categories/router';
import PrivacyPolicy from '../../modules/app/privacy_policy/router';
import HowItsWorks from '../../modules/app/how_it_works/router';
import About from '../../modules/app/about/router';

export default [...Sounds, ...Weather, ...Contact, ...Donate, ...Categories, ...PrivacyPolicy, ...HowItsWorks, ...About];
