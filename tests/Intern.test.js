const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Creates an object with a name, id, email and school property', () => {
      const intern = new Intern("Joe", "1", "joe@gmail.com", "University of Birmingham");
  
      expect(intern.name).toBe("Joe");
      expect(intern.id).toBe("1");
      expect(intern.email).toBe("joe@gmail.com");
      expect(intern.school).toBe("University of Birmingham")
    });
    it('getSchool() function returns github', () => {
        const intern = new Intern("Joe", "1", "joe@gmail.com", "University of Birmingham");
        expect(intern.getSchool()).toBe("University of Birmingham");
    });
    it('getRole() function returns "Intern"', () => {
        const intern = new Intern("Joe", "1", "joe@gmail.com", "University of Birmingham");
        expect(intern.getRole()).toBe("Intern");
    });
  });