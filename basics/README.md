# Basics of NEXT

<h3>File Based Routing</h3>
Next js has file based or folder based routing , which means every page we want to route , we make a folder for it in app
then we make a file named page.jsx in it 
This means whenever we go to https:localhost:3000/folder_name , that page.jsx will open
This means we no longer need to explicitly tell the program about routing 

<h3>Components</h3>
To make components in next js , we make a folder in the root directory itself (named - components) and then we make components inside of it.

<h3>Server Components</h3>

In Next by default every component is a server component and to make it a client component we need to state ( "use client" )

The difference between client and server component is that , a server component is rendered on the server and then the renderd html
is sent to the client , while a client component is rendered directly on the client side 
Also we cant use hooks and all on the server side 
and we can use fs modules or other backend modules on client side

for example , logging , if something is logged on the page and it is client component , it will be rendered in the browser , while if it is a server component , it will be logged on the server side 

to note : we can use a client side component on the server side component 
take a look in app/new/page.jsx

<h3>Link component</h3>
the main problem behind using a href is that it reloads the page so to avoid it we use link tag
in link href , just give the location of the folder
use link href , it will not reload the page and do the routing

check new page and routess page , i have routed those to each other using link component

<h3>Script component</h3>
This component is used to inject javascript code in our react page 
Example : used Script tag on routess/page
** in this tag S is capital

<h3>Image component</h3>
This component is mainly used to optimze the performance of our website 
what it does is that it reduces the size of any image in our website exceptionally
 it takes 4 required props (height , width , src,alt)
 we can give either static url or an external url to the src
 When using an external URL, you must add it to remotePatterns in next.config.js.

 <h3> API / Backend </h3>
 In nextjs we can build backend directly for that we just need to make route.js file in app/api/add
 all other steps are just same 
 use fetch to get data in frotend and in route.js , we need to import nextresponse , in order to send any response
 boiler plate : 
 
 ```https://nextjs.org/docs/app/api-reference/file-conventions/route```

 <h3>Server Actions</h3>
 Every time we need to do some small task on the backend(like logging time) , we need not make api for it ,
 we can make server actions for it 
 to make a sever action we just need to make a file in @/actions named form(any) and in that file we just need to make the required
 function , we need to export that function , but do mention the file as "use server"
 to use that function in any of our page , we just need to import it and then use
 we can also make this function on the same page , just mention "use server" in the starting of the function

 <h3>Layouting</h3>
 In next js the layout is set by using layout.js file 
 in every folder structure we can give a layout file in which we can define the layout
 to hide the name of the folder from the https link , we can give the outer folder name in round brackets (),
 this will emit the outer folder from the https link

 <h3>Metadata from client file</h3>
 we have export function to send the metadata from a client file that can be used to set the title for a particular page
 and the description for a particular page

 <h3>Middleware-Redirecting/Rewriting</h3>
 we can make middlewares in next as same as the express
 these middlewares execute before the execution of any other file , so they ca be used to redirect from one page to another

 <br>

 <b>Redirecting</b> - it is used in case when we want to change the link from one to another 
                for example - if we want to redirect someone from home to about , we can use redirect
                it changes the link in search bar as well as the content of the page

<b>Rewriting</b> - it is used in case we want to change the content of one link with other 
            for example - if we want to show the content of about on home , we can use the rewrite 
            it does not changes the link in searchbar , it just changes the content of the page

<h3>Dynamic Routing</h3>
To route pages dynamically or using parametres from the link we use slug in next js
To make a dynamic route using slug , we need to make a folder named ```[slug]``` in the link that we awnt it to be and then define a page for it ,this page will define the content of https.../folder/sluggg
to define the content of the folder itslef we need to make a page.js in the folder itself
it is mainly used in cases like blogs etc

we would also come around situations when we need to have a nested slug for example https.../blogs/deepansu/pyhton 
in that case we make the folder structure as :
we change ```[slugs]``` folder to ```[...params]``` and then when we try to access these params inside of our page , we will get an array of endpoints , that in above case will be ["deepansu","python"]