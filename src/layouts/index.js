import styles from './index.css';
import Link from 'umi/link';
import Header from './head/Header';
import Footer from './footer/Footer'
function BasicLayout(props) {
  return (
    <div className="site">
    <Header></Header>

      {props.children}
<Footer ></Footer>
    </div>
  );
}

export default BasicLayout;
