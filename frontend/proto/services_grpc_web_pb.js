/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./services_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.LoginRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/proto.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.proto.LoginRequest,
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.proto.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     Promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.SignupRequest,
 *   !proto.proto.AuthResponse>}
 */
const methodDescriptor_AuthService_SignUp = new grpc.web.MethodDescriptor(
  '/proto.AuthService/SignUp',
  grpc.web.MethodType.UNARY,
  proto.proto.SignupRequest,
  proto.proto.AuthResponse,
  /**
   * @param {!proto.proto.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.proto.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/SignUp',
      request,
      metadata || {},
      methodDescriptor_AuthService_SignUp,
      callback);
};


/**
 * @param {!proto.proto.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthResponse>}
 *     Promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/SignUp',
      request,
      metadata || {},
      methodDescriptor_AuthService_SignUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.EmailUsedRequest,
 *   !proto.proto.UsedResponse>}
 */
const methodDescriptor_AuthService_EmailUsed = new grpc.web.MethodDescriptor(
  '/proto.AuthService/EmailUsed',
  grpc.web.MethodType.UNARY,
  proto.proto.EmailUsedRequest,
  proto.proto.UsedResponse,
  /**
   * @param {!proto.proto.EmailUsedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UsedResponse.deserializeBinary
);


/**
 * @param {!proto.proto.EmailUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UsedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UsedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.emailUsed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/EmailUsed',
      request,
      metadata || {},
      methodDescriptor_AuthService_EmailUsed,
      callback);
};


/**
 * @param {!proto.proto.EmailUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UsedResponse>}
 *     Promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.emailUsed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/EmailUsed',
      request,
      metadata || {},
      methodDescriptor_AuthService_EmailUsed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UsernameUsedRequest,
 *   !proto.proto.UsedResponse>}
 */
const methodDescriptor_AuthService_UsernameUsed = new grpc.web.MethodDescriptor(
  '/proto.AuthService/UsernameUsed',
  grpc.web.MethodType.UNARY,
  proto.proto.UsernameUsedRequest,
  proto.proto.UsedResponse,
  /**
   * @param {!proto.proto.UsernameUsedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UsedResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UsernameUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UsedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UsedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.usernameUsed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/UsernameUsed',
      request,
      metadata || {},
      methodDescriptor_AuthService_UsernameUsed,
      callback);
};


/**
 * @param {!proto.proto.UsernameUsedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UsedResponse>}
 *     Promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.usernameUsed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/UsernameUsed',
      request,
      metadata || {},
      methodDescriptor_AuthService_UsernameUsed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AuthUserRequest,
 *   !proto.proto.AuthUserResponse>}
 */
const methodDescriptor_AuthService_AuthUser = new grpc.web.MethodDescriptor(
  '/proto.AuthService/AuthUser',
  grpc.web.MethodType.UNARY,
  proto.proto.AuthUserRequest,
  proto.proto.AuthUserResponse,
  /**
   * @param {!proto.proto.AuthUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.AuthUserResponse.deserializeBinary
);


/**
 * @param {!proto.proto.AuthUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.AuthUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.AuthUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.AuthServiceClient.prototype.authUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.AuthService/AuthUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_AuthUser,
      callback);
};


/**
 * @param {!proto.proto.AuthUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.AuthUserResponse>}
 *     Promise that resolves to the response
 */
proto.proto.AuthServicePromiseClient.prototype.authUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.AuthService/AuthUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_AuthUser);
};


module.exports = proto.proto;

