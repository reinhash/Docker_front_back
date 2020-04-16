FROM node:12.2.0-alpine as react_build 
#also say 
WORKDIR /app
#copy the react app to the container
COPY . /app/ 

# #prepare the contiainer for building react 
RUN yarn install
RUN yarn add react-scripts@3.0.1 -g --silent 
RUN yarn run build 

#prepare nginx
FROM nginx:1.16.0-alpine

COPY --from=react_build /app/build /usr/share/nginx/html




#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]