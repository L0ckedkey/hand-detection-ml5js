# Menggunakan Nginx sebagai base image
FROM nginx:latest

# Copy file HTML, CSS, dan JS ke direktori default Nginx
COPY . /usr/share/nginx/html

# Expose port 80 agar bisa diakses
EXPOSE 80
