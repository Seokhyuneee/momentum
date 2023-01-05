const images = [
    "https://i.pinimg.com/600x315/2c/f0/9c/2cf09c7c63d18790859aafed5941a766.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWSCgK7dZcJ_QEiHtghiqjHNVQJnKAE2AOg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sXP6AcS-rDp3RaGjH1RWTwXM94plp31RU1_8tfXm5niNTQYbmrzyynFh7b24B02roks&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2m9kjYk7El3BJe50C9USEe9vcbb3YrFQyEA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx71x0mZnQbArm4gIQ8Fh0cvj6KsE7A4YaP4PHYOXWHWJdhwbe2YePbO96Q5MKfFGfeFc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DLDL7vWMQfgSVA6nwovUZdpeEM3lEsxrhA&usqp=CAU"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;
document.body.style.backgroundSize="100vw 100vh";