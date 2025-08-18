
function alic4() {
  console.log(
    Math.floor(
      Math.random() * 10000
    )
  );

  setTimeout(
    alic4,
    Math.random() * 100
  );
}

alic4();

