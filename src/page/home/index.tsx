import React,{ Component } from 'react'
import SearchCondition from './components/SearchCondition'
import SearchList from './components/SearchList'
import {ICustomer, ISearchCondition} from './entity/stateType'
import axios from 'axios';

interface SearchPropType{
}

interface SearchStateType{
    searchCondition: ISearchCondition,
    page:number,
    result:Array<ICustomer>,
    hasMore:boolean
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
            hasMore:false
        }
    };
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
        const SEARCH_URL = 'http://localhost:8080/customer/searchNew/search';
        axios.post(SEARCH_URL, { params: { partyName1: searchCondition.id, 
                                residenceCountry: searchCondition.name,
                                nscWsRegulatorCountry: searchCondition.country,} })
                .then((res) => {
                    console.log(res.data.searchResultList);
                    this.setState({result:res.data.searchResultList})
                }).catch((e)=> {
                    console.log(e);
                })
}
    render() {
        const { result} = this.state
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