
import React, {Component} from 'react'
import '../../../scss/style.scss';
interface SearchProps {

}
interface SearchState {

}

export class Search extends Component<SearchProps, SearchState> {
    constructor(props:SearchProps) {
        super(props);
    }
    render() {
        return (
            <div className="content">
            <div className="container-fluid">
                <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                    <div className="body">
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                                <label htmlFor="partyName1">顧客名（英字）</label>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group">
                                    <input type="text"  className="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 control-label ">
                                <label htmlFor=""><strong>（部分一致検索）</strong></label>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                                <label htmlFor="country1">居住国</label>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group">
                                    <input type="text"  className="form-control" placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                                <label htmlFor="country2">国籍</label>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group">
                                <input type="text"  className="form-control" placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 text-right">
                                <a href="javascript:void(0)" className="btn  btn-blue ">Search</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
        )
    }
}