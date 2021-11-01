export function publish(event:{args:number}){
    const nativeEvent=new CustomEvent(event.constructor.name,{
        detail:event.args,
    });
    document.dispatchEvent(nativeEvent);
}

// export function subscribe(eventClass:any, handler:any) {
//     const modifiedHandler=(event:any)=>{
      
//       handler(event.detail)
//     }
//     document.addEventListener(eventClass.name, modifiedHandler, { passive: true });
//     return {
//       unsubscribe: function unsubscribe() {
//         document.removeEventListener(eventClass.name,handler);
//       },
//     };
//   } 