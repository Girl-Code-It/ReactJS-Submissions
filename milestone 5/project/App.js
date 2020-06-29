import React, {Component} from "react";
import "./styles.css";

class App extends Component{
  constructor(){
    super()
    this.state={
      isShown1: false,
      isShown2: false,
      isShown3: false
    }
  }
  render(){
    return(
      <div className="App">
      <h1>Dog breeds</h1>
      <button onClick={() => this.setState({
         isShown1: !this.state.isShown1
      })}>Golden Retriever</button><br /><br />
      {
        this.state.isShown1 ? (
          <img class="aligncenter size-full wp-image-6288" src="https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-golden-retrievers.jpg" alt="pictures of golden retrievers" width="1000" height="650" srcset="https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-golden-retrievers.jpg 1200w, https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-golden-retrievers-300x163.jpg 300w, https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-golden-retrievers-768x416.jpg 768w, https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-golden-retrievers-1024x555.jpg 1024w, https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-golden-retrievers-740x400.jpg 740w" sizes="(max-width: 1200px) 100vw, 1200px"/>):null
      }
      <br /><br />
      <button onClick={() => this.setState({
        isShown2: !this.state.isShown2
      })}>Shih Tzu</button><br/><br/>
      {
        this.state.isShown2 ? (
          <img src="//www.pets4homes.co.uk/images/articles/1532/five-useful-things-to-know-about-the-shih-tzu-puppy-5ce28dbbd4f12.jpg" class="center-block img-responsive" alt="Five Useful Things To Know About The Shih Tzu Puppy" width="1000" height="650"/>
        ):null
      }
      <br /><br />
  
      <button onClick={() => this.setState({
         isShown3: !this.state.isShown3
      })}>Labrador Retriever</button><br /><br />
      {
        this.state.isShown3 ? (
          <img alt="10 Surprising Facts About Labrador Retriever Dogs, aka the best dogs ever!" class="hCL kVc L4E MIw" importance="auto" loading="auto" src="https://i.pinimg.com/564x/99/f9/ed/99f9ede31328c8484e9e252d08811535.jpg" width="1000" height="600"/>
        ):null
      }
    </div>
    )}
}

export default App
