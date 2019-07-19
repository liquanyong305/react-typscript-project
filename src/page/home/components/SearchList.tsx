import React,{ Component } from 'react'
import {ICustomer} from '../entity/stateType'


interface SearchListProps{
    searchResultList:Array<ICustomer>,
    selectItem:Function,
    deleteItem:Function
}

const SearchList : React.SFC<SearchListProps> = ({searchResultList,selectItem,deleteItem}) => {
    return(
            <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card m-t-10">
                <div className="header">
                <div className="search-result-text">
                    <h2>
                    検索結果
                    </h2>
                </div>
                <div className="search-result-record-counts">
                    <h2>
                    <b>
                        <span id="recordInfo"></span>
                    </b>
                    </h2>
                </div>
                </div>
                <div className="body table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="nowrap">id</th>
                                <th className="nowrap">name</th>
                                <th className="nowrap">country</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyid">
                            {
                                searchResultList.length && searchResultList.map((customer, index)=>(
                                    <tr key={index}>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SearchList