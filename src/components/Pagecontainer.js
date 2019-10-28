/**
 * Created By brand On 2018/2/2
 */
import React, {Component} from 'react'
import Pagecomponent from './Pagecomponent'
import data from '../../mock/tsconfig.json'
import {connect} from 'dva';

class Pagecontainer extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         dataList:[],
    //         pageConfig: {
    //             totalPages: data.length //总页码
    //         }
    //     }
    //     this.getCurrentPage = this.getCurrentPage.bind(this)
    // }
    getCurrentPage(currentPage) {
        console.log({data});
        
  this.props.dispatch({
      type:"item/getCurrentPage",
      payload:{currentPage}
  })

    }
    render() {
        return (
            <div>
                {/* <div>
                    {this.state.dataList}
                </div> */}
                <Pagecomponent 
                               pageCallbackFn={this.getCurrentPage}/>
            </div>

        )
    }
}

export default connect(({ item,setting,category}) => ({item,setting,category}))(Pagecontainer)