export const getUserInitials = (username: string): string => {
    if (username) {
      const lettersOfUserName: string[] = username.split('');
      let user: string = `${lettersOfUserName[0]}`;
      for (let i = 1; i < lettersOfUserName.length; i++) {
        if (lettersOfUserName[i] === '_') {
          user += lettersOfUserName[i + 1];
        }
      }
      return user.toUpperCase();
    } else {
      return '';
    }
  };