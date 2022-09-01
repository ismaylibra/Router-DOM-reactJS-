import { HttpClient } from "../HttpClient";

class CardsServices extends HttpClient{
 constructor(){
    super("https://jsonplaceholder.typicode.com");
 }
 getAllPosts(){
    return this.get('posts');
 }
 getPost(id){
   return this.get('posts',id)
 }
 postAllPosts(body){
    return this.post('posts',body);
 }
 putAllPosts(body,id){
    return this.put('posts',body,id);
 }
 patchAllPosts(body,id){
    return this.patch('posts',body,id);
 }
 deletePost(id){
    return this.delete('posts',id);
 }
}
export const cardService = new CardsServices();