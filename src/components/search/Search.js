import React, {Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";
class Search extends Component{
   
        state={
            searchtext:'',
            apiUrl:'https://pixabay.com/api',
            apiKey:'22601941-326bd18a9fc81e079cd2314a2',
            images:[],
        };
        onTextChange=e=>{
            const val=e.target.value;
            this.setState({[e.target.name]:val},
                        ()=>{
                            if(val==='')
                            {
                                this.setState({images:[]});
                            }
                            else{
                        axios
                       .get(
                          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                          this.state.searchText
                          }&image_type=photo&safesearch=true`
                          )
                       .then(res=>this.setState({images:res.data.hits}))
                       .catch(err=>console.log(err))
                        }
                             });
 } ;
        render(){
                console.log(this.state.images);
                return(
            <div>
                <input type="text"
                 style={{
                 backgroundColor:"black",
                 color:"white",
                 marginLeft:570,
                 marginTop:100,
                 paddingTop:20,
                 paddingLeft:70,
                 fontSize:30,
                 borderTopStyle:"hidden",
                 borderRightStyle:"hidden",
                 borderLeftStyle:"hidden",
                 outline:"none",
                 borderBottomStyle:"groove",
                 }}
                 placeholder="Search images"
                 name="searchText"
                 value={this.state.searchText}
                 onChange={this.onTextChange}
                 />
                 <br />
                {this.state.images.length>0} ?{<ImageResults images={this.state.images} />}:null
                </div>
              )
           }
        }

export default Search;