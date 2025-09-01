function status(request, reponse) {
  reponse.status(200).json({ chave: "oh yeah! let's go augustão!" });
}

export default status;
