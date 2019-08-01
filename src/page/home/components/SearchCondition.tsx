
import React, {Component} from 'react'
import '../../../scss/style.scss';
import {ISearchCondition} from '../entity/stateType'

interface SearchProps {
    conditionHandler: Function
}
interface SearchConditionState {
    searchCondition: ISearchCondition,
    // [x:string] : string,
}

const defaultSearchCondition: ISearchCondition  = {
    id: '',
    name: '',
    country: ''
}

export default class SearchCondition extends Component<SearchProps, SearchConditionState> {

    constructor(props:SearchProps) {
        super(props);
        this.state = {
            searchCondition:defaultSearchCondition
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSearch() {
        console.log('search click!');
        this.props.conditionHandler(this.state.searchCondition);
    }
    setSearchCondition = (searchCondition:ISearchCondition) => {
        this.setState({
            searchCondition: searchCondition
        })
    }

    handleInputChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const value = target.value;
        // const name = target.name;
        const condition: ISearchCondition  = Object.assign({}, this.state.searchCondition, {[target.name]: target.value});
        this.setState({ searchCondition: condition});
    }
    render() {
        const { searchCondition } = this.state
        return (
                <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                    <div className="body">
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                                <label htmlFor="name">name</label>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group">
                                    <input type="text"  name="id" className="form-control" value={searchCondition.id} onChange={this.handleInputChange} placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 control-label ">
                                <label htmlFor=""><strong>（part search）</strong></label>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                                <label htmlFor="country1">residenceCountry</label>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" value={searchCondition.name} onChange={this.handleInputChange} placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                                <label htmlFor="country2">nscWsRegulatorCountry</label>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group">
                                <input type="text" name="country" className="form-control" value={searchCondition.country} onChange={this.handleInputChange} placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 text-right">
                                <a href="#" className="btn" onClick={() => this.handleSearch()} >Search</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}