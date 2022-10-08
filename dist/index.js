"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Promise78(promisefun) {
    return new Promise((resolveover) => {
        new Promise((resolve, reject) => {
            promisefun(resolve, reject);
        })
            .then(data => resolveover([null, data]))
            .catch(err => resolveover([err]));
    });
}
exports.default = Promise78;
//# sourceMappingURL=index.js.map