(this.webpackJsonpzetris=this.webpackJsonpzetris||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(7),c=r.n(l),i=(r(13),r(2)),o=r(3),s=r(1),u=r(5),h=r(4);r(14);var m=[[60,60,0,50,50,0,20,0,0,30,30,0,10,0,70,70],[0,60,0,50,0,0,20,0,0,30,0,0,0,0,70,0],[60,0,0,50,50,0,20,20,0,30,0,0,10,0,0,70],[60,0,0,50,0,0,20,0,0,30,0,0,10,0,0,70],[60,60,0,50,50,0,20,20,0,30,0,0,10,0,70,70]],p=[[[10],[10],[10],[10]],[[0,40],[0,40],[40,40]],[[30,0],[30,0],[30,30]],[[50,50],[50,50]],[[0,70,70],[70,70,0]],[[20,20,20],[0,20,0]],[[60,60,0],[0,60,60]]],v=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).map=Array(200).fill(0),a.currPiece=a.getRandomPiece(),a.nextPiece=a.getRandomPiece(),a.state={grid:a.map,next:a.nextPiece,score:0,gameover:!1},a.totalRows=0,a.x=5-Math.floor(a.currPiece[0].length/2),a.y=0,a.ticks=0,a.timer=setTimeout((function(){return a.tick(Object(s.a)(a))}),10),window.addEventListener("keydown",(function(e){return a.handleKeyDown(Object(s.a)(a),e)})),a}return Object(o.a)(r,[{key:"getRandomPiece",value:function(){var e=Math.floor(Math.random()*p.length);return p[e].slice(0)}},{key:"tick",value:function(e){++e.ticks%25==0&&(e.y+=1);var t=e.state.score;if(e.collides(e,e.x)){for(var r=0;r<200;r++)e.map[r]>0&&e.map[r]%10==0&&(e.map[r]-=1);for(var a=0;a<200;a++)e.map[a]>0&&e.map[a]%10==0&&(e.map[a]=0);for(var n=[],l=19;l>=0;l--){for(var c=!0,i=0;i<10;i++)c=c&&(e.map[10*l+i]+1)%10==0;c&&n.push(l)}if(n.length>0){for(var o=0;o<n.length;o++)e.map.splice(10*n[o],10);e.totalRows+=n.length;var s=Array(10*n.length).fill(0);e.map=s.concat(e.map),t+=1e3*Math.floor(Math.pow(2,n.length))}e.y=0,e.x=5-Math.floor(e.currPiece[0].length/2),e.currPiece=e.nextPiece,e.nextPiece=e.getRandomPiece();for(var u=!1,h=0;h<10;h++)u=u||e.map[h]>0&&(e.map[h]+1)%10==0;if(u)return void e.setState({gameover:u})}for(var m=0;m<200;m++)e.map[m]%10==0&&(e.map[m]=0);for(var p=0;p<e.currPiece.length;p++)for(var v=0;v<e.currPiece[0].length;v++)e.currPiece[p][v]&&(e.map[10*(p+e.y)+(v+e.x)]=e.currPiece[p][v]);e.setState({grid:e.map,next:e.nextPiece,score:t}),e.timer=setTimeout((function(){return e.tick(e)}),10)}},{key:"collides",value:function(e,t){if(e.currPiece.length+e.y>20)return!0;for(var r=0;r<e.currPiece.length;r++)for(var a=0;a<e.currPiece[0].length;a++){var n=10*(r+e.y)+a+t;if((e.map[n]+1)%10==0&&e.currPiece[r][a]>0&&e.currPiece[r][a]%10==0)return!0}return!1}},{key:"handleKeyDown",value:function(e,t){switch(t.preventDefault(),t.key){case"Down":case"ArrowDown":case" ":var r=e.y+=1;r+e.currPiece.length>19&&(r=20-e.currPiece.length),e.y=r;break;case"Left":case"ArrowLeft":e.left();break;case"Right":case"ArrowRight":e.right();break;case"Up":case"ArrowUp":case"Shift":e.rotate()}}},{key:"rotateRight",value:function(e){var t=[];return e.forEach((function(e,r,a){e.forEach((function(e,a,n){t[n.length-a-1]=t[n.length-a-1]||[],t[n.length-a-1][r]=e}))})),t}},{key:"left",value:function(){var e=this.x-=1;e<0&&(e=0),this.collides(this,e)||(this.x=e)}},{key:"right",value:function(){var e=this.x+1;e+this.currPiece[0].length>9&&(e=10-this.currPiece[0].length),this.collides(this,e)||(this.x=e)}},{key:"rotate",value:function(){var e=this.rotateRight(this.currPiece);this.x+e[0].length<=10&&!this.collides(this,this.x)&&(this.currPiece=e)}},{key:"renderCell",value:function(e){return n.a.createElement(g,{i:e})}},{key:"render",value:function(){for(var e=this,t=[],r=0;r<m.length;r++)for(var a=0;a<m[0].length;a++)t.push(this.renderCell(m[r][a],"next"+3*r+a));var l={"grid-template-columns":Array(m[0].length).fill("20px").join(" "),"grid-template-rows":Array(m.length).fill("20px").join(" ")};return n.a.createElement("div",null,n.a.createElement("div",{className:"gameover is-"+this.state.gameover},n.a.createElement("div",{className:"gameover-popup"},n.a.createElement("div",{className:"gameover-text"},n.a.createElement("h1",null,"GAME OVER"),n.a.createElement("p",null,"score: ",this.state.score)))),n.a.createElement("table",{cellPadding:"10px"},n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},n.a.createElement("div",{className:"zetris"},n.a.createElement("div",{className:"next-piece",style:l},t)))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(d,{grid:this.state.grid})),n.a.createElement("td",{style:{"vertical-align":"top"}},n.a.createElement("p",null,"SCORE ",n.a.createElement("div",{className:"score"},this.state.score)),"NEXT ",n.a.createElement(f,{next:this.state.next}),n.a.createElement("p",null,n.a.createElement("center",null,n.a.createElement("button",{onClick:function(){return e.rotate.apply(e,[])}},"\u27f2"),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){return e.left.apply(e,[])}},"\u21e6"),n.a.createElement("button",{onClick:function(){return e.right.apply(e,[])}},"\u21e8")))))))}}]),r}(n.a.Component),f=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderCell",value:function(e){return n.a.createElement(g,{i:e})}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.next.length;t++)for(var r=0;r<this.props.next[0].length;r++)e.push(this.renderCell(this.props.next[t][r],"next"+3*t+r));var a={"grid-template-columns":Array(this.props.next[0].length).fill("20px").join(" "),"grid-template-rows":Array(this.props.next.length).fill("20px").join(" ")};return n.a.createElement("div",{class:"next-container"},n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",{className:"next-piece",style:a},e),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\xa0"),n.a.createElement("div",null,"\xa0"))}}]),r}(n.a.Component),d=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderCell",value:function(e){return n.a.createElement(g,{i:e})}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.grid.length;t++)e.push(this.renderCell(this.props.grid[t],"cell"+t));return n.a.createElement("div",{className:"grid-container"},e)}}]),r}(n.a.Component),g=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e="grid-cell piece-"+this.props.i;return n.a.createElement("div",{className:e},"\xa0")}}]),r}(n.a.Component),E=function(){return n.a.createElement("center",null,n.a.createElement("audio",{autoPlay:!0,loop:!0},n.a.createElement("source",{src:"https://archive.org/download/TetrisThemeMusic/Tetris.mp3",type:"audio/mpeg"})),n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,r){e.exports=r(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8eedffa0.chunk.js.map