const fs = require('fs');
const flatted = require('flatted');

class baseDatabase {
    constructor(model) {
        this.model = model;
        this.filename = this.model.name.toLowerCase();
    }

    save(objects) {
        return new Promise((resolve, reject) => {
            fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), (err) => {
                if (err) return reject(err);

                resolve();
            });
        });
    }

    load() {
        return new Promise((resolve, reject) => {
            fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8', (err, file) => {
                if (err) return reject();

                const objects = flatted.parse(file);

                resolve(objects.map(this.model.create));
            });
        });
    }

    async insert(object) {
        const objects = await this.load();

        this.save(objects.concat(object));
    }

    async remove(index) {
        const objects = await this.load();

        return new Promise((resolve) => {
            objects.splice(index, 1);

            resolve(this.save(objects));
        });
    }
}

module.exports = baseDatabase;