import React, { Component } from 'react'
import { connect } from 'react-redux'  
import './BaiTapBurger.css'


class BaiTapBurger extends Component {



    renderBurgerMid = () => {
        let{burger} = this.props;

        return Object.entries(burger).map(([propsBurger, value],index)=>{
           
            let burMid = [];
            for(let i=0; i<value;i++){
              burMid.push(<div key={i} className={propsBurger}></div>) 
            }
            
            return burMid;
        })
    }

    renderMenu =()=>{
        let {burger,menu} = this.props;
        return Object.entries(menu).map(([propsMenu, price], index)=>{
            let valid = false;
            if(burger[propsMenu]<=0){
                valid = true;
            }else{
                valid = false;
            }
          
           return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button className='btn btn-success' onClick={()=>{
                            const action = {
                                type:'THEM_SO_LUONG',
                                propsM: propsMenu,
                                payload: + 1
                            }
                            this.props.dispatch(action);
                        }}>+</button>
                        <span> {burger[propsMenu]} </span>
                        <button className='btn btn-danger' onClick={()=>{
                            const action = {
                                type:'THEM_SO_LUONG',
                                propsM: propsMenu,
                                payload: - 1
                            }
                            this.props.dispatch(action);
                        }} disabled={valid}>-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu]*price}</td>
                </tr>
                
           )
        })
    }


    tongTien=()=>{
        let {burger,menu} = this.props;
        let tong = 10;  
        Object.entries(menu).map(([propsMenu, price], index)=>{
            tong += burger[propsMenu]*price;
        })
        return  ( <tr>
            <td colSpan={2}></td>
            <td>T???ng c???ng:</td>
            <td>{tong}</td>
        </tr>)
    }

  render() {
    
    return (
      <div className='container'>
            <h3 className='display-4 text-dark text-center'>B??i t???p burger</h3>
            <div className='row'>
                <div className='col-7'>
                    <h1 className='text-center text-success'>B??i t???p Burger Cybersoft</h1>
                    <h3 className='text-center text-danger'>B??nh Burger c???a b???n</h3>
                    <div className='breadTop' ></div>
                        {this.renderBurgerMid()}
                    <div className='breadBottom'></div>
                </div>
                <div className='col-5'>
                    <h3 className='text-center text-success'>Ch???n th???c ??n</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Th???c ??n</td>
                                <td></td>
                                <td>????n gi??</td>
                                <td>Th??nh ti???n</td>
                            </tr>
                             {this.renderMenu()}
                             
                        </thead>
                        <tfoot>
                        {this.tongTien()}
                        </tfoot>
                        
                    </table>
                   
                </div>
            </div>

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
       
       
    }
}

const ComponentRedux = connect(mapStateToProps)(BaiTapBurger);
export default ComponentRedux;
