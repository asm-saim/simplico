1. installed tailwind, daity, and react router.
2. created - 
components, 
pages(for routing pages), 
Routes(separated the routing, but linked with main.jsx with RouterProvider compo)

//
Created a component called Root. It has 2 static 1 dynamic components(Outlet). 
Called the Root component in the Routes home page(/).

//
created a Error element, which will be called which , wrong routes enter.
Called it to the routes home pages(/).

//
add children array in the the routes, Inside it all the dynamic page will routes.
So, far,Routes has:
 path:"/",
 component:<Root>,
 errorElement:,
 children:[]

 //There are some ways to load data.
 1. useState + useEffect.
 2. use  route loader in the Routes components.
  
 