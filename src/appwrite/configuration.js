import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";

export class DatabaseService {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.appProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appDatabaseId,
        config.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Database service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appDatabaseId,
        config.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Database service :: updatePost :: error", error);
    }
  }

  async deletePost(documentId) {
    try {
      await this.databases.deleteDocument(
        config.appDatabaseId,
        config.appCollectionId,
        documentId
      );
      return true;
    } catch (error) {
      console.log("Database service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appDatabaseId,
        config.appCollectionId,
        slug
      );
    } catch (error) {
      console.log("Database service :: getPost :: error", error);
      return false;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appDatabaseId,
        config.appCollectionId,
        queries
      );
    } catch (error) {
      console.log("Database service :: getAllPosts :: error", error);
      return false;
    }
  }

  //file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Database service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Database service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appBucketId, fileId);
  }
}

const service = new DatabaseService();
export default service;
