import styles from './index.css';
import Link from 'umi/link';
import Home from './home/index';
import dva from 'dva';
export default function() {



  const app = dva({
      initialState: {
         products: [
           { name: 'dva', id: 1 },
           { name: 'antd', id: 2 },
         ],
       },
     });
  return (
    <div >

<Home></Home>
    </div>
  );
}
