"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const media_resource_1 = __importDefault(require("./media-resource"));
class Audio extends media_resource_1.default {
    get defaultContentType() {
        return 'audio/x-m4a';
    }
    get resourceName() {
        return 'audio';
    }
    get resourcesName() {
        return 'audio';
    }
    get createAction() {
        return 'audio/upload';
    }
    async uploadTrack(file, attributes, progress) {
        const options = {
            method: 'POST',
            path: this.createAction,
            fields: {},
            files: {},
        };
        options.fields['audio[access_key]'] = attributes.access_key;
        options.files['audio[track]'] = file;
        // options.progress = progress;
        const json = await this.call(options);
        return json[this.resourceName];
    }
    track(id) {
        return this.call({ path: this.trackURL(id, 'json') });
    }
    audioURL(id) {
        return this.member(id, 'mp4');
    }
    trackURL(id, format) {
        return this.memberAction(id, 'track', format);
    }
}
exports.default = Audio;
//# sourceMappingURL=audio.js.map