"use strict";
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const media_resource_1 = __importDefault(require("./media-resource"));
class Video extends media_resource_1.default {
    get defaultContentType() {
        return 'video/mp4';
    }
    get resourceName() {
        return 'video';
    }
    get resourcesName() {
        return 'videos';
    }
    get createAction() {
        return 'videos/upload';
    }
    async uploadTrack(file, attributes, progress) {
        const options = {
            method: 'POST',
            path: this.createAction,
            fields: {},
            files: {},
        };
        options.fields['video[access_key]'] = attributes.access_key;
        options.files['video[track]'] = file;
        options.progress = progress;
        const json = await this.call(options);
        return json[this.resourceName];
    }
    videoURL(id) {
        return this.member(id, 'mp4');
    }
    largeURL(id) {
        return this.client.url(this.memberAction(id, 'thumbnail_large', 'jpg'));
    }
    thumbnail(id) {
        return this.downloadVersion(id, 'thumbnail_medium_square');
    }
    async track(id) {
        const json = await this.call({ path: this.trackURL(id, 'json') });
        return json;
    }
    trackURL(id, format) {
        return this.memberAction(id, 'track', format);
    }
    thumbnailURL(id) {
        return this.client.url(this.memberAction(id, 'thumbnail_medium_square', 'jpg'));
    }
}
exports.default = Video;
//# sourceMappingURL=video.js.map