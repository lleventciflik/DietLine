class BaseService {
    constructor(model) {
        this.model = model;
    }

    save(objects) {
        return this.model.insertMany(objects);
    }

    load() {
        return this.model.find();
    }

    async insert(object) {        

        console.log(object);
        return this.model.create(object);
    }

    async update(id, object) {
        return this.model.findByIdAndUpdate(id, object);
    }

    async removeById(id) {
        return this.model.findOneAndRemove(id);
    }

    async findById(id) {
        return this.model.findById(id);
    }

    async query(obj) {
        return this.model.find(obj);
    }
}

module.exports = BaseService;