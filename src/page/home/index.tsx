import React,{ Component } from 'react'
import SearchCondition from './components/SearchCondition'
import SearchList from './components/SearchList'
import Error from '../../common/error/Error'
import {ICustomer, ISearchCondition} from './entity/stateType'
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
interface SearchPropType extends RouteComponentProps<any>{
}

interface SearchStateType{
    searchCondition: ISearchCondition,
    page:number,
    result:Array<ICustomer>,
    hasMore:boolean,
    error?:TypeError
}
const defaultSearchCondition: ISearchCondition  = {
    id: '',
    name: '',
    country: ''
}

export default class Search extends Component<SearchPropType, SearchStateType>{
    searchCondition:React.RefObject<SearchCondition>;
    constructor(props:SearchPropType){
        super(props)
        this.searchCondition = React.createRef()
        this.state = {
            searchCondition: defaultSearchCondition,
            page:1,
            result:[],
            hasMore:false,
        }
    };
    // componentDidMount() {
    //     throw new Error("An error has occured in Search component!");
    // }
    selectItem =() => {
        console.log('selectItem');
    };
    deleteItem =() => {
        console.log('deleteItem');
    };
    onQueryChange = (searchCondition:ISearchCondition) => {
        console.log(searchCondition);
        this.setState({
            searchCondition: searchCondition
        })
        const SEARCH_URL = '/API/customer/search';
        let params = JSON.stringify({
            id: searchCondition.id, 
            name: searchCondition.name,
            country: searchCondition.country
        })
        // headers の指定が必須 BACKENDのほうは@RequestBody  Map<String,String> params

        axios.post(SEARCH_URL, params, { headers: { 'Content-Type': 'application/json'}})
                .then((res) => {
                    if(res.status !== 200) {
                        this.props.history.push('/error')
                    }
                    console.log(res.status);
                    this.setState({result:res.data.searchResultList})
                }).catch((error)=> {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log('error in respones')
                        console.log(error.response.data);
                        console.log(error.response.status);      // 例：400
                        console.log(error.response.statusText);  // Bad Request
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log('error in request')
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                    this.setState({error: error})
                    //this.props.history.push('/error')
                    //console.log(e);
                    //this.props.history.push('/error')
                    //throw new Error(error);
                })
}
    render() {
        const { result, error} = this.state
        
        if (error) {
            return (<Error></Error>)
        }
        return (
            <div className="content">
                <div className="container-fluid">
                    <SearchCondition ref={this.searchCondition} conditionHandler={this.onQueryChange} ></SearchCondition>
                    <SearchList searchResultList={result} selectItem={this.selectItem} deleteItem={this.deleteItem} ></SearchList>
                </div>
            </div>

        )
    }
}