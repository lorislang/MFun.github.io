function copyCode(codeId) {
      const codeElement = document.getElementById(codeId);
      const text = codeElement.textContent;

      navigator.clipboard.writeText(text).then(() => {
      }).catch(err => {
        alert("Fehler beim Kopieren: " + err);
      });
    }