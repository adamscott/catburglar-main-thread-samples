
var Godot = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  
  return (
function(moduleArg = {}) {
  var moduleRtn;

var l = Object.assign({}, moduleArg), ba, ca, ea = new Promise((a, b) => {
  ba = a;
  ca = b;
});
"_memory ___indirect_function_table __Z14godot_web_mainiPPc __emwebxr_on_input_event __emwebxr_on_simple_event _main onRuntimeInitialized".split(" ").forEach(a => {
  Object.getOwnPropertyDescriptor(ea, a) || Object.defineProperty(ea, a, {get:() => fa("You are getting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"), set:() => fa("You are setting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),});
});
var ha = "object" == typeof window, ia = "function" == typeof importScripts, ja = "object" == typeof process && "object" == typeof process.Qc && "string" == typeof process.Qc.node, ka = !ha && !ja && !ia;
if (l.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
}
var la = Object.assign({}, l), ma = [], na = "./this.program", oa = (a, b) => {
  throw b;
}, pa = "", ra;
if (ka) {
  if ("object" == typeof process && "function" === typeof require || "object" == typeof window || "function" == typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
} else if (ha || ia) {
  ia ? pa = self.location.href : "undefined" != typeof document && document.currentScript && (pa = document.currentScript.src);
  _scriptName && (pa = _scriptName);
  pa.startsWith("blob:") ? pa = "" : pa = pa.substr(0, pa.replace(/[?#].*/, "").lastIndexOf("/") + 1);
  if ("object" != typeof window && "function" != typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  ia && (ra = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  });
} else {
  throw Error("environment detection error");
}
var sa = l.print || console.log.bind(console), n = l.printErr || console.error.bind(console);
Object.assign(l, la);
la = null;
Object.getOwnPropertyDescriptor(l, "fetchSettings") && fa("`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API");
l.arguments && (ma = l.arguments);
ta("arguments", "arguments_");
l.thisProgram && (na = l.thisProgram);
ta("thisProgram", "thisProgram");
l.quit && (oa = l.quit);
ta("quit", "quit_");
p("undefined" == typeof l.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
p("undefined" == typeof l.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
p("undefined" == typeof l.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
p("undefined" == typeof l.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
p("undefined" == typeof l.read, "Module.read option was removed (modify read_ in JS)");
p("undefined" == typeof l.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
p("undefined" == typeof l.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
p("undefined" == typeof l.setWindowTitle, "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
p("undefined" == typeof l.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
ta("asm", "wasmExports");
ta("read", "read_");
ta("readAsync", "readAsync");
ta("readBinary", "readBinary");
ta("setWindowTitle", "setWindowTitle");
p(!ja, "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.");
p(!ka, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
var va;
l.wasmBinary && (va = l.wasmBinary);
ta("wasmBinary", "wasmBinary");
"object" != typeof WebAssembly && n("no native wasm support detected");
var wa, xa = !1, ya;
function p(a, b) {
  a || fa("Assertion failed" + (b ? ": " + b : ""));
}
var t, v, za, Aa, w, A, B, Ba, Ca;
function Da() {
  var a = wa.buffer;
  l.HEAP8 = t = new Int8Array(a);
  l.HEAP16 = za = new Int16Array(a);
  l.HEAPU8 = v = new Uint8Array(a);
  l.HEAPU16 = Aa = new Uint16Array(a);
  l.HEAP32 = w = new Int32Array(a);
  l.HEAPU32 = A = new Uint32Array(a);
  l.HEAPF32 = B = new Float32Array(a);
  l.HEAPF64 = Ca = new Float64Array(a);
  l.HEAP64 = Ba = new BigInt64Array(a);
  l.HEAPU64 = new BigUint64Array(a);
}
p(!l.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
p("undefined" != typeof Int32Array && "undefined" !== typeof Float64Array && void 0 != Int32Array.prototype.subarray && void 0 != Int32Array.prototype.set, "JS engine does not provide full typed array support");
p(!l.wasmMemory, "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
p(!l.INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
function Ea() {
  var a = Fa();
  p(0 == (a & 3));
  0 == a && (a += 4);
  A[a >> 2] = 34821223;
  A[a + 4 >> 2] = 2310721022;
  A[0] = 1668509029;
}
function Ga() {
  if (!xa) {
    var a = Fa();
    0 == a && (a += 4);
    var b = A[a >> 2], c = A[a + 4 >> 2];
    34821223 == b && 2310721022 == c || fa(`Stack overflow! Stack cookie has been overwritten at ${Ha(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Ha(c)} ${Ha(b)}`);
    1668509029 != A[0] && fa("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var Ia = new Int16Array(1), Ja = new Int8Array(Ia.buffer);
Ia[0] = 25459;
if (115 !== Ja[0] || 99 !== Ja[1]) {
  throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
}
var Ka = [], La = [], Ma = [], Na = [], Oa = [], Pa = !1, Qa = !1;
function Ra() {
  var a = l.preRun.shift();
  Ka.unshift(a);
}
p(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
p(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
p(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
p(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var Sa = 0, Ta = null, Ua = null, Va = {};
function Wa() {
  Sa++;
  l.monitorRunDependencies?.(Sa);
  p(!Va["wasm-instantiate"]);
  Va["wasm-instantiate"] = 1;
  null === Ta && "undefined" != typeof setInterval && (Ta = setInterval(() => {
    if (xa) {
      clearInterval(Ta), Ta = null;
    } else {
      var a = !1, b;
      for (b in Va) {
        a || (a = !0, n("still waiting on run dependencies:")), n(`dependency: ${b}`);
      }
      a && n("(end of list)");
    }
  }, 10000));
}
function fa(a) {
  l.onAbort?.(a);
  a = "Aborted(" + a + ")";
  n(a);
  xa = !0;
  ya = 1;
  a = new WebAssembly.RuntimeError(a);
  ca(a);
  throw a;
}
var Xa = a => a.startsWith("data:application/octet-stream;base64,"), Ya = a => a.startsWith("file://");
function Za(a, b) {
  return (...c) => {
    p(Pa, `native function \`${a}\` called before runtime initialization`);
    p(!Qa, `native function \`${a}\` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)`);
    var d = $a[a];
    p(d, `exported native function \`${a}\` not found`);
    p(c.length <= b, `native function \`${a}\` called with ${c.length} args but expects ${b}`);
    return d(...c);
  };
}
var ab;
function bb(a) {
  if (a == ab && va) {
    return new Uint8Array(va);
  }
  if (ra) {
    return ra(a);
  }
  throw "both async and sync fetching of the wasm failed";
}
function cb(a) {
  return va || !ha && !ia || "function" != typeof fetch ? Promise.resolve().then(() => bb(a)) : fetch(a, {credentials:"same-origin"}).then(b => {
    if (!b.ok) {
      throw `failed to load wasm binary file at '${a}'`;
    }
    return b.arrayBuffer();
  }).catch(() => bb(a));
}
function db(a, b, c) {
  return cb(a).then(d => WebAssembly.instantiate(d, b)).then(c, d => {
    n(`failed to asynchronously prepare wasm: ${d}`);
    Ya(ab) && n(`warning: Loading from a file URI (${ab}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    fa(d);
  });
}
function eb(a, b) {
  var c = ab;
  return va || "function" != typeof WebAssembly.instantiateStreaming || Xa(c) || "function" != typeof fetch ? db(c, a, b) : fetch(c, {credentials:"same-origin"}).then(d => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
    n(`wasm streaming compile failed: ${e}`);
    n("falling back to ArrayBuffer instantiation");
    return db(c, a, b);
  }));
}
function ta(a, b) {
  Object.getOwnPropertyDescriptor(l, a) || Object.defineProperty(l, a, {configurable:!0, get() {
    fa(`\`Module.${a}\` has been replaced by \`${b}\`` + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }});
}
function fb(a) {
  return "FS_createPath" === a || "FS_createDataFile" === a || "FS_createPreloadedFile" === a || "FS_unlink" === a || "addRunDependency" === a || "FS_createLazyFile" === a || "FS_createDevice" === a || "removeRunDependency" === a;
}
function gb(a, b) {
  "undefined" != typeof globalThis && Object.defineProperty(globalThis, a, {configurable:!0, get() {
    hb(`\`${a}\` is not longer defined by emscripten. ${b}`);
  }});
}
gb("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
gb("asm", "Please use wasmExports instead");
function ib(a) {
  Object.getOwnPropertyDescriptor(l, a) || Object.defineProperty(l, a, {configurable:!0, get() {
    var b = `'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
    fb(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    fa(b);
  }});
}
function jb(a) {
  this.name = "ExitStatus";
  this.message = `Program terminated with exit(${a})`;
  this.status = a;
}
var kb = a => {
  for (; 0 < a.length;) {
    a.shift()(l);
  }
};
function lb(a, b = "i8") {
  b.endsWith("*") && (b = "*");
  switch(b) {
    case "i1":
      return t[a];
    case "i8":
      return t[a];
    case "i16":
      return za[a >> 1];
    case "i32":
      return w[a >> 2];
    case "i64":
      return Ba[a >> 3];
    case "float":
      return B[a >> 2];
    case "double":
      return Ca[a >> 3];
    case "*":
      return A[a >> 2];
    default:
      fa(`invalid type for getValue: ${b}`);
  }
}
var mb = l.noExitRuntime || !1, Ha = a => {
  p("number" === typeof a);
  return "0x" + (a >>> 0).toString(16).padStart(8, "0");
};
function C(a, b, c = "i8") {
  c.endsWith("*") && (c = "*");
  switch(c) {
    case "i1":
      t[a] = b;
      break;
    case "i8":
      t[a] = b;
      break;
    case "i16":
      za[a >> 1] = b;
      break;
    case "i32":
      w[a >> 2] = b;
      break;
    case "i64":
      Ba[a >> 3] = BigInt(b);
      break;
    case "float":
      B[a >> 2] = b;
      break;
    case "double":
      Ca[a >> 3] = b;
      break;
    case "*":
      A[a >> 2] = b;
      break;
    default:
      fa(`invalid type for setValue: ${c}`);
  }
}
var hb = a => {
  hb.sb || (hb.sb = {});
  hb.sb[a] || (hb.sb[a] = 1, n(a));
}, nb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ob = (a, b, c) => {
  var d = b + c;
  for (c = b; a[c] && !(c >= d);) {
    ++c;
  }
  if (16 < c - b && a.buffer && nb) {
    return nb.decode(a.subarray(b, c));
  }
  for (d = ""; b < c;) {
    var e = a[b++];
    if (e & 128) {
      var f = a[b++] & 63;
      if (192 == (e & 224)) {
        d += String.fromCharCode((e & 31) << 6 | f);
      } else {
        var g = a[b++] & 63;
        224 == (e & 240) ? e = (e & 15) << 12 | f << 6 | g : (240 != (e & 248) && hb("Invalid UTF-8 leading byte " + Ha(e) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), e = (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63);
        65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
      }
    } else {
      d += String.fromCharCode(e);
    }
  }
  return d;
}, D = (a, b) => {
  p("number" == typeof a, `UTF8ToString expects a number (got ${typeof a})`);
  return a ? ob(v, a, b) : "";
}, pb = [], qb, rb = a => {
  var b = pb[a];
  b || (a >= pb.length && (pb.length = a + 1), pb[a] = b = qb.get(a));
  p(qb.get(a) == b, "JavaScript-side Wasm function table mirror is out of date!");
  return b;
}, sb = (a, b) => {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}, tb = a => {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = sb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}, ub = a => {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b &&= b.substr(0, b.length - 1);
  return a + b;
}, vb = a => {
  if ("/" === a) {
    return "/";
  }
  a = tb(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}, wb = () => {
  if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
    return a => crypto.getRandomValues(a);
  }
  fa("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
}, xb = a => (xb = wb())(a), zb = (...a) => {
  for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
    c = 0 <= d ? a[d] : yb;
    if ("string" != typeof c) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!c) {
      return "";
    }
    b = c + "/" + b;
    c = "/" === c.charAt(0);
  }
  b = sb(b.split("/").filter(e => !!e), !c).join("/");
  return (c ? "/" : "") + b || ".";
}, Ab = (a, b) => {
  function c(g) {
    for (var h = 0; h < g.length && "" === g[h]; h++) {
    }
    for (var k = g.length - 1; 0 <= k && "" === g[k]; k--) {
    }
    return h > k ? [] : g.slice(h, k - h + 1);
  }
  a = zb(a).substr(1);
  b = zb(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++) {
    if (a[f] !== b[f]) {
      e = f;
      break;
    }
  }
  d = [];
  for (f = e; f < a.length; f++) {
    d.push("..");
  }
  d = d.concat(b.slice(e));
  return d.join("/");
}, Cb = [], Db = a => {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
  }
  return b;
}, Eb = (a, b, c, d) => {
  p("string" === typeof a, `stringToUTF8Array expects a string (got ${typeof a})`);
  if (!(0 < d)) {
    return 0;
  }
  var e = c;
  d = c + d - 1;
  for (var f = 0; f < a.length; ++f) {
    var g = a.charCodeAt(f);
    if (55296 <= g && 57343 >= g) {
      var h = a.charCodeAt(++f);
      g = 65536 + ((g & 1023) << 10) | h & 1023;
    }
    if (127 >= g) {
      if (c >= d) {
        break;
      }
      b[c++] = g;
    } else {
      if (2047 >= g) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | g >> 6;
      } else {
        if (65535 >= g) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | g >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          1114111 < g && hb("Invalid Unicode code point " + Ha(g) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
          b[c++] = 240 | g >> 18;
          b[c++] = 128 | g >> 12 & 63;
        }
        b[c++] = 128 | g >> 6 & 63;
      }
      b[c++] = 128 | g & 63;
    }
  }
  b[c] = 0;
  return c - e;
};
function Fb(a, b) {
  var c = Array(Db(a) + 1);
  a = Eb(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
var Gb = [];
function Hb(a, b) {
  Gb[a] = {input:[], C:[], T:b};
  Ib(a, Jb);
}
var Jb = {open(a) {
  var b = Gb[a.node.sa];
  if (!b) {
    throw new E(43);
  }
  a.m = b;
  a.seekable = !1;
}, close(a) {
  a.m.T.Ha(a.m);
}, Ha(a) {
  a.m.T.Ha(a.m);
}, read(a, b, c, d) {
  if (!a.m || !a.m.T.Gb) {
    throw new E(60);
  }
  for (var e = 0, f = 0; f < d; f++) {
    try {
      var g = a.m.T.Gb(a.m);
    } catch (h) {
      throw new E(29);
    }
    if (void 0 === g && 0 === e) {
      throw new E(6);
    }
    if (null === g || void 0 === g) {
      break;
    }
    e++;
    b[c + f] = g;
  }
  e && (a.node.timestamp = Date.now());
  return e;
}, write(a, b, c, d) {
  if (!a.m || !a.m.T.nb) {
    throw new E(60);
  }
  try {
    for (var e = 0; e < d; e++) {
      a.m.T.nb(a.m, b[c + e]);
    }
  } catch (f) {
    throw new E(29);
  }
  d && (a.node.timestamp = Date.now());
  return e;
},}, Kb = {Gb() {
  a: {
    if (!Cb.length) {
      var a = null;
      "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
      if (!a) {
        a = null;
        break a;
      }
      Cb = Fb(a, !0);
    }
    a = Cb.shift();
  }
  return a;
}, nb(a, b) {
  null === b || 10 === b ? (sa(ob(a.C, 0)), a.C = []) : 0 != b && a.C.push(b);
}, Ha(a) {
  a.C && 0 < a.C.length && (sa(ob(a.C, 0)), a.C = []);
}, sc() {
  return {Yc:25856, $c:5, Xc:191, Zc:35387, Wc:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]};
}, tc() {
  return 0;
}, uc() {
  return [24, 80];
},}, Lb = {nb(a, b) {
  null === b || 10 === b ? (n(ob(a.C, 0)), a.C = []) : 0 != b && a.C.push(b);
}, Ha(a) {
  a.C && 0 < a.C.length && (n(ob(a.C, 0)), a.C = []);
},};
function Mb(a, b) {
  var c = a.l ? a.l.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.l, a.l = new Uint8Array(b), 0 < a.u && a.l.set(c.subarray(0, a.u), 0));
}
var G = {K:null, v() {
  return G.createNode(null, "/", 16895, 0);
}, createNode(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new E(63);
  }
  G.K || (G.K = {dir:{node:{J:G.h.J, D:G.h.D, pa:G.h.pa, Na:G.h.Na, Sa:G.h.Sa, Za:G.h.Za, Ua:G.h.Ua, Ra:G.h.Ra, Va:G.h.Va}, stream:{aa:G.j.aa}}, file:{node:{J:G.h.J, D:G.h.D}, stream:{aa:G.j.aa, read:G.j.read, write:G.j.write, zb:G.j.zb, Jb:G.j.Jb, Kb:G.j.Kb}}, link:{node:{J:G.h.J, D:G.h.D, ua:G.h.ua}, stream:{}}, Bb:{node:{J:G.h.J, D:G.h.D}, stream:Nb}});
  c = Ob(a, b, c, d);
  I(c.mode) ? (c.h = G.K.dir.node, c.j = G.K.dir.stream, c.l = {}) : 32768 === (c.mode & 61440) ? (c.h = G.K.file.node, c.j = G.K.file.stream, c.u = 0, c.l = null) : 40960 === (c.mode & 61440) ? (c.h = G.K.link.node, c.j = G.K.link.stream) : 8192 === (c.mode & 61440) && (c.h = G.K.Bb.node, c.j = G.K.Bb.stream);
  c.timestamp = Date.now();
  a && (a.l[b] = c, a.timestamp = c.timestamp);
  return c;
}, h:{J(a) {
  var b = {};
  b.ec = 8192 === (a.mode & 61440) ? a.id : 1;
  b.rc = a.id;
  b.mode = a.mode;
  b.yc = 1;
  b.uid = 0;
  b.oc = 0;
  b.sa = a.sa;
  I(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.u : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.Vb = new Date(a.timestamp);
  b.Pa = new Date(a.timestamp);
  b.cc = new Date(a.timestamp);
  b.Yb = 4096;
  b.Zb = Math.ceil(b.size / b.Yb);
  return b;
}, D(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  if (void 0 !== b.size && (b = b.size, a.u != b)) {
    if (0 == b) {
      a.l = null, a.u = 0;
    } else {
      var c = a.l;
      a.l = new Uint8Array(b);
      c && a.l.set(c.subarray(0, Math.min(b, a.u)));
      a.u = b;
    }
  }
}, pa() {
  throw Pb[44];
}, Na(a, b, c, d) {
  return G.createNode(a, b, c, d);
}, Sa(a, b, c) {
  if (I(a.mode)) {
    try {
      var d = Qb(b, c);
    } catch (f) {
    }
    if (d) {
      for (var e in d.l) {
        throw new E(55);
      }
    }
  }
  delete a.parent.l[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.l[c] = a;
  b.timestamp = a.parent.timestamp;
  a.parent = b;
}, Za(a, b) {
  delete a.l[b];
  a.timestamp = Date.now();
}, Ua(a, b) {
  var c = Qb(a, b), d;
  for (d in c.l) {
    throw new E(55);
  }
  delete a.l[b];
  a.timestamp = Date.now();
}, Ra(a) {
  var b = [".", ".."], c;
  for (c of Object.keys(a.l)) {
    b.push(c);
  }
  return b;
}, Va(a, b, c) {
  a = G.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, ua(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new E(28);
  }
  return a.link;
},}, j:{read(a, b, c, d, e) {
  var f = a.node.l;
  if (e >= a.node.u) {
    return 0;
  }
  a = Math.min(a.node.u - e, d);
  p(0 <= a);
  if (8 < a && f.subarray) {
    b.set(f.subarray(e, e + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = f[e + d];
    }
  }
  return a;
}, write(a, b, c, d, e, f) {
  p(!(b instanceof ArrayBuffer));
  b.buffer === t.buffer && (f = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.l || a.l.subarray)) {
    if (f) {
      return p(0 === e, "canOwn must imply no weird position inside the file"), a.l = b.subarray(c, c + d), a.u = d;
    }
    if (0 === a.u && 0 === e) {
      return a.l = b.slice(c, c + d), a.u = d;
    }
    if (e + d <= a.u) {
      return a.l.set(b.subarray(c, c + d), e), d;
    }
  }
  Mb(a, e + d);
  if (a.l.subarray && b.subarray) {
    a.l.set(b.subarray(c, c + d), e);
  } else {
    for (f = 0; f < d; f++) {
      a.l[e + f] = b[c + f];
    }
  }
  a.u = Math.max(a.u, e + d);
  return d;
}, aa(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.u);
  if (0 > b) {
    throw new E(28);
  }
  return b;
}, zb(a, b, c) {
  Mb(a.node, b + c);
  a.node.u = Math.max(a.node.u, b + c);
}, Jb(a, b, c, d, e) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new E(43);
  }
  a = a.node.l;
  if (e & 2 || a.buffer !== t.buffer) {
    if (0 < c || c + b < a.length) {
      a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
    }
    c = !0;
    fa("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
    b = void 0;
    if (!b) {
      throw new E(48);
    }
    t.set(a, b);
  } else {
    c = !1, b = a.byteOffset;
  }
  return {Ad:b, Uc:c};
}, Kb(a, b, c, d) {
  G.j.write(a, b, 0, d, c, !1);
  return 0;
},},}, Rb = l.preloadPlugins || [], Sb = (a, b) => {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}, J = {Y:{}, indexedDB:() => {
  if ("undefined" != typeof indexedDB) {
    return indexedDB;
  }
  var a = null;
  "object" == typeof window && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
  p(a, "IDBFS used, but indexedDB not supported");
  return a;
}, Ub:21, W:"FILE_DATA", v:(...a) => G.v(...a), Qb:(a, b, c) => {
  J.kc(a, (d, e) => {
    if (d) {
      return c(d);
    }
    J.lc(a, (f, g) => {
      if (f) {
        return c(f);
      }
      J.Cc(b ? g : e, b ? e : g, c);
    });
  });
}, Ac:() => {
  Object.values(J.Y).forEach(a => a.close());
  J.Y = {};
}, jc:(a, b) => {
  var c = J.Y[a];
  if (c) {
    return b(null, c);
  }
  try {
    var d = J.indexedDB().open(a, J.Ub);
  } catch (e) {
    return b(e);
  }
  if (!d) {
    return b("Unable to connect to IndexedDB");
  }
  d.onupgradeneeded = e => {
    var f = e.target.result;
    e = e.target.transaction;
    var g;
    f.objectStoreNames.contains(J.W) ? g = e.objectStore(J.W) : g = f.createObjectStore(J.W);
    g.indexNames.contains("timestamp") || g.createIndex("timestamp", "timestamp", {unique:!1});
  };
  d.onsuccess = () => {
    c = d.result;
    J.Y[a] = c;
    b(null, c);
  };
  d.onerror = e => {
    b(e.target.error);
    e.preventDefault();
  };
}, kc:(a, b) => {
  function c(h) {
    return "." !== h && ".." !== h;
  }
  function d(h) {
    return k => tb(h + "/" + k);
  }
  var e = {};
  for (a = Tb(a.ra).filter(c).map(d(a.ra)); a.length;) {
    var f = a.pop();
    try {
      var g = Ub(f);
    } catch (h) {
      return b(h);
    }
    I(g.mode) && a.push(...Tb(f).filter(c).map(d(f)));
    e[f] = {timestamp:g.Pa};
  }
  return b(null, {type:"local", entries:e});
}, lc:(a, b) => {
  var c = {};
  J.jc(a.ra, (d, e) => {
    if (d) {
      return b(d);
    }
    try {
      var f = e.transaction([J.W], "readonly");
      f.onerror = g => {
        b(g.target.error);
        g.preventDefault();
      };
      f.objectStore(J.W).index("timestamp").openKeyCursor().onsuccess = g => {
        g = g.target.result;
        if (!g) {
          return b(null, {type:"remote", db:e, entries:c});
        }
        c[g.primaryKey] = {timestamp:g.key};
        g.continue();
      };
    } catch (g) {
      return b(g);
    }
  });
}, vc:(a, b) => {
  try {
    var c = K(a).node;
    var d = Ub(a);
  } catch (f) {
    return b(f);
  }
  if (I(d.mode)) {
    return b(null, {timestamp:d.Pa, mode:d.mode});
  }
  if (32768 === (d.mode & 61440)) {
    a = c;
    var e = c;
    e = e.l ? e.l.subarray ? e.l.subarray(0, e.u) : new Uint8Array(e.l) : new Uint8Array(0);
    a.l = e;
    return b(null, {timestamp:d.Pa, mode:d.mode, contents:c.l});
  }
  return b(Error("node type not supported"));
}, Ic:(a, b, c) => {
  try {
    if (I(b.mode)) {
      Vb(a, b.mode);
    } else if (32768 === (b.mode & 61440)) {
      Wb(a, b.contents, {Ab:!0});
    } else {
      return c(Error("node type not supported"));
    }
    Xb(a, b.mode);
    var d = b.timestamp, e = b.timestamp, f = K(a, {V:!0}).node;
    f.h.D(f, {timestamp:Math.max(d, e)});
  } catch (g) {
    return c(g);
  }
  c(null);
}, Ec:(a, b) => {
  try {
    var c = Ub(a);
    I(c.mode) ? Yb(a) : 32768 === (c.mode & 61440) && Zb(a);
  } catch (d) {
    return b(d);
  }
  b(null);
}, wc:(a, b, c) => {
  a = a.get(b);
  a.onsuccess = d => c(null, d.target.result);
  a.onerror = d => {
    c(d.target.error);
    d.preventDefault();
  };
}, Jc:(a, b, c, d) => {
  try {
    var e = a.put(c, b);
  } catch (f) {
    d(f);
    return;
  }
  e.onsuccess = () => d();
  e.onerror = f => {
    d(f.target.error);
    f.preventDefault();
  };
}, Fc:(a, b, c) => {
  a = a.delete(b);
  a.onsuccess = () => c();
  a.onerror = d => {
    c(d.target.error);
    d.preventDefault();
  };
}, Cc:(a, b, c) => {
  function d(r) {
    if (r && !h) {
      return h = !0, c(r);
    }
  }
  var e = 0, f = [];
  Object.keys(a.entries).forEach(function(r) {
    var x = a.entries[r], z = b.entries[r];
    z && x.timestamp.getTime() == z.timestamp.getTime() || (f.push(r), e++);
  });
  var g = [];
  Object.keys(b.entries).forEach(function(r) {
    a.entries[r] || (g.push(r), e++);
  });
  if (!e) {
    return c(null);
  }
  var h = !1, k = ("remote" === a.type ? a.db : b.db).transaction([J.W], "readwrite"), m = k.objectStore(J.W);
  k.onerror = k.onabort = r => {
    d(r.target.error);
    r.preventDefault();
  };
  k.oncomplete = () => {
    h || c(null);
  };
  f.sort().forEach(r => {
    "local" === b.type ? J.wc(m, r, (x, z) => {
      if (x) {
        return d(x);
      }
      J.Ic(r, z, d);
    }) : J.vc(r, (x, z) => {
      if (x) {
        return d(x);
      }
      J.Jc(m, r, z, d);
    });
  });
  g.sort().reverse().forEach(r => {
    "local" === b.type ? J.Ec(r, d) : J.Fc(m, r, d);
  });
},}, $b = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized",}, ac = {EPERM:63, ENOENT:44, ESRCH:71, EINTR:27, EIO:29, ENXIO:60, E2BIG:1, ENOEXEC:45, EBADF:8, ECHILD:12, EAGAIN:6, EWOULDBLOCK:6, ENOMEM:48, EACCES:2, EFAULT:21, ENOTBLK:105, 
EBUSY:10, EEXIST:20, EXDEV:75, ENODEV:43, ENOTDIR:54, EISDIR:31, EINVAL:28, ENFILE:41, EMFILE:33, ENOTTY:59, ETXTBSY:74, EFBIG:22, ENOSPC:51, ESPIPE:70, EROFS:69, EMLINK:34, EPIPE:64, EDOM:18, ERANGE:68, ENOMSG:49, EIDRM:24, ECHRNG:106, EL2NSYNC:156, EL3HLT:107, EL3RST:108, ELNRNG:109, EUNATCH:110, ENOCSI:111, EL2HLT:112, EDEADLK:16, ENOLCK:46, EBADE:113, EBADR:114, EXFULL:115, ENOANO:104, EBADRQC:103, EBADSLT:102, EDEADLOCK:16, EBFONT:101, ENOSTR:100, ENODATA:116, ETIME:117, ENOSR:118, ENONET:119, 
ENOPKG:120, EREMOTE:121, ENOLINK:47, EADV:122, ESRMNT:123, ECOMM:124, EPROTO:65, EMULTIHOP:36, EDOTDOT:125, EBADMSG:9, ENOTUNIQ:126, EBADFD:127, EREMCHG:128, ELIBACC:129, ELIBBAD:130, ELIBSCN:131, ELIBMAX:132, ELIBEXEC:133, ENOSYS:52, ENOTEMPTY:55, ENAMETOOLONG:37, ELOOP:32, EOPNOTSUPP:138, EPFNOSUPPORT:139, ECONNRESET:15, ENOBUFS:42, EAFNOSUPPORT:5, EPROTOTYPE:67, ENOTSOCK:57, ENOPROTOOPT:50, ESHUTDOWN:140, ECONNREFUSED:14, EADDRINUSE:3, ECONNABORTED:13, ENETUNREACH:40, ENETDOWN:38, ETIMEDOUT:73, 
EHOSTDOWN:142, EHOSTUNREACH:23, EINPROGRESS:26, EALREADY:7, EDESTADDRREQ:17, EMSGSIZE:35, EPROTONOSUPPORT:66, ESOCKTNOSUPPORT:137, EADDRNOTAVAIL:4, ENETRESET:39, EISCONN:30, ENOTCONN:53, ETOOMANYREFS:141, EUSERS:136, EDQUOT:19, ESTALE:72, ENOTSUP:138, ENOMEDIUM:148, EILSEQ:25, EOVERFLOW:61, ECANCELED:11, ENOTRECOVERABLE:56, EOWNERDEAD:62, ESTRPIPE:135,}, bc = null, cc = {}, dc = [], ec = 1, fc = null, yb = "/", gc = !0, E = class extends Error {
  constructor(a) {
    super($b[a]);
    this.name = "ErrnoError";
    this.g = a;
    for (var b in ac) {
      if (ac[b] === a) {
        this.code = b;
        break;
      }
    }
  }
}, Pb = {}, hc = 0, ic = class {
  constructor() {
    this.G = {};
    this.node = null;
  }
  get flags() {
    return this.G.flags;
  }
  set flags(a) {
    this.G.flags = a;
  }
  get position() {
    return this.G.position;
  }
  set position(a) {
    this.G.position = a;
  }
}, jc = class {
  constructor(a, b, c, d) {
    a ||= this;
    this.parent = a;
    this.v = a.v;
    this.H = null;
    this.id = ec++;
    this.name = b;
    this.mode = c;
    this.h = {};
    this.j = {};
    this.sa = d;
  }
  get read() {
    return 365 === (this.mode & 365);
  }
  set read(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }
  get write() {
    return 146 === (this.mode & 146);
  }
  set write(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }
};
function K(a, b = {}) {
  a = zb(a);
  if (!a) {
    return {path:"", node:null};
  }
  b = Object.assign({ib:!0, pb:0}, b);
  if (8 < b.pb) {
    throw new E(32);
  }
  a = a.split("/").filter(g => !!g);
  for (var c = bc, d = "/", e = 0; e < a.length; e++) {
    var f = e === a.length - 1;
    if (f && b.parent) {
      break;
    }
    c = Qb(c, a[e]);
    d = tb(d + "/" + a[e]);
    c.H && (!f || f && b.ib) && (c = c.H.root);
    if (!f || b.V) {
      for (f = 0; 40960 === (c.mode & 61440);) {
        if (c = kc(d), d = zb(ub(d), c), c = K(d, {pb:b.pb + 1}).node, 40 < f++) {
          throw new E(32);
        }
      }
    }
  }
  return {path:d, node:c};
}
function lc(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.v.ra, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
    }
    b = b ? `${a.name}/${b}` : a.name;
    a = a.parent;
  }
}
function mc(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % fc.length;
}
function nc(a) {
  var b = mc(a.parent.id, a.name);
  a.ba = fc[b];
  fc[b] = a;
}
function oc(a) {
  var b = mc(a.parent.id, a.name);
  if (fc[b] === a) {
    fc[b] = a.ba;
  } else {
    for (b = fc[b]; b;) {
      if (b.ba === a) {
        b.ba = a.ba;
        break;
      }
      b = b.ba;
    }
  }
}
function Qb(a, b) {
  var c = I(a.mode) ? (c = pc(a, "x")) ? c : a.h.pa ? 0 : 2 : 54;
  if (c) {
    throw new E(c);
  }
  for (c = fc[mc(a.id, b)]; c; c = c.ba) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.h.pa(a, b);
}
function Ob(a, b, c, d) {
  p("object" == typeof a);
  a = new jc(a, b, c, d);
  nc(a);
  return a;
}
function I(a) {
  return 16384 === (a & 61440);
}
function qc(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function pc(a, b) {
  if (gc) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function rc(a, b) {
  try {
    return Qb(a, b), 20;
  } catch (c) {
  }
  return pc(a, "wx");
}
function sc(a, b, c) {
  try {
    var d = Qb(a, b);
  } catch (e) {
    return e.g;
  }
  if (a = pc(a, "wx")) {
    return a;
  }
  if (c) {
    if (!I(d.mode)) {
      return 54;
    }
    if (d === d.parent || lc(d) === yb) {
      return 10;
    }
  } else {
    if (I(d.mode)) {
      return 31;
    }
  }
  return 0;
}
function tc(a) {
  a = dc[a];
  if (!a) {
    throw new E(8);
  }
  return a;
}
function uc(a, b = -1) {
  a = Object.assign(new ic(), a);
  if (-1 == b) {
    a: {
      for (b = 0; 4096 >= b; b++) {
        if (!dc[b]) {
          break a;
        }
      }
      throw new E(33);
    }
  }
  a.o = b;
  return dc[b] = a;
}
function vc(a, b = -1) {
  a = uc(a, b);
  a.j?.gd?.(a);
  return a;
}
var Nb = {open(a) {
  a.j = cc[a.node.sa].j;
  a.j.open?.(a);
}, aa() {
  throw new E(70);
},};
function Ib(a, b) {
  cc[a] = {j:b};
}
function wc(a) {
  var b = [];
  for (a = [a]; a.length;) {
    var c = a.pop();
    b.push(c);
    a.push(...c.Oa);
  }
  return b;
}
function xc(a, b) {
  function c(g) {
    p(0 < hc);
    hc--;
    return b(g);
  }
  function d(g) {
    if (g) {
      if (!d.hc) {
        return d.hc = !0, c(g);
      }
    } else {
      ++f >= e.length && c(null);
    }
  }
  "function" == typeof a && (b = a, a = !1);
  hc++;
  1 < hc && n(`warning: ${hc} FS.syncfs operations in flight at once, probably just doing extra work`);
  var e = wc(bc.v), f = 0;
  e.forEach(g => {
    if (!g.type.Qb) {
      return d(null);
    }
    g.type.Qb(g, a, d);
  });
}
function yc(a, b) {
  if ("string" == typeof a) {
    throw a;
  }
  var c = "/" === b;
  if (c && bc) {
    throw new E(10);
  }
  if (!c && b) {
    var d = K(b, {ib:!1});
    b = d.path;
    d = d.node;
    if (d.H) {
      throw new E(10);
    }
    if (!I(d.mode)) {
      throw new E(54);
    }
  }
  b = {type:a, wd:{}, ra:b, Oa:[]};
  a = a.v(b);
  a.v = b;
  b.root = a;
  c ? bc = a : d && (d.H = b, d.v && d.v.Oa.push(b));
  return a;
}
function zc(a) {
  a = K(a, {ib:!1});
  if (!a.node.H) {
    throw new E(28);
  }
  a = a.node;
  var b = a.H, c = wc(b);
  Object.keys(fc).forEach(d => {
    for (d = fc[d]; d;) {
      var e = d.ba;
      c.includes(d.v) && oc(d);
      d = e;
    }
  });
  a.H = null;
  b = a.v.Oa.indexOf(b);
  p(-1 !== b);
  a.v.Oa.splice(b, 1);
}
function Ac(a, b, c) {
  var d = K(a, {parent:!0}).node;
  a = vb(a);
  if (!a || "." === a || ".." === a) {
    throw new E(28);
  }
  var e = rc(d, a);
  if (e) {
    throw new E(e);
  }
  if (!d.h.Na) {
    throw new E(63);
  }
  return d.h.Na(d, a, b, c);
}
function Bc(a, b) {
  return Ac(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
}
function Vb(a, b) {
  a = a.split("/");
  for (var c = "", d = 0; d < a.length; ++d) {
    if (a[d]) {
      c += "/" + a[d];
      try {
        Bc(c, b);
      } catch (e) {
        if (20 != e.g) {
          throw e;
        }
      }
    }
  }
}
function Cc(a, b, c) {
  "undefined" == typeof c && (c = b, b = 438);
  Ac(a, b | 8192, c);
}
function Dc(a, b) {
  if (!zb(a)) {
    throw new E(44);
  }
  var c = K(b, {parent:!0}).node;
  if (!c) {
    throw new E(44);
  }
  b = vb(b);
  var d = rc(c, b);
  if (d) {
    throw new E(d);
  }
  if (!c.h.Va) {
    throw new E(63);
  }
  c.h.Va(c, b, a);
}
function Yb(a) {
  var b = K(a, {parent:!0}).node;
  a = vb(a);
  var c = Qb(b, a), d = sc(b, a, !0);
  if (d) {
    throw new E(d);
  }
  if (!b.h.Ua) {
    throw new E(63);
  }
  if (c.H) {
    throw new E(10);
  }
  b.h.Ua(b, a);
  oc(c);
}
function Tb(a) {
  a = K(a, {V:!0}).node;
  if (!a.h.Ra) {
    throw new E(54);
  }
  return a.h.Ra(a);
}
function Zb(a) {
  var b = K(a, {parent:!0}).node;
  if (!b) {
    throw new E(44);
  }
  a = vb(a);
  var c = Qb(b, a), d = sc(b, a, !1);
  if (d) {
    throw new E(d);
  }
  if (!b.h.Za) {
    throw new E(63);
  }
  if (c.H) {
    throw new E(10);
  }
  b.h.Za(b, a);
  oc(c);
}
function kc(a) {
  a = K(a).node;
  if (!a) {
    throw new E(44);
  }
  if (!a.h.ua) {
    throw new E(28);
  }
  return zb(lc(a.parent), a.h.ua(a));
}
function Ub(a, b) {
  a = K(a, {V:!b}).node;
  if (!a) {
    throw new E(44);
  }
  if (!a.h.J) {
    throw new E(63);
  }
  return a.h.J(a);
}
function Ec(a) {
  return Ub(a, !0);
}
function Xb(a, b) {
  a = "string" == typeof a ? K(a, {V:!0}).node : a;
  if (!a.h.D) {
    throw new E(63);
  }
  a.h.D(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}
function Fc(a, b) {
  if (0 > b) {
    throw new E(28);
  }
  a = "string" == typeof a ? K(a, {V:!0}).node : a;
  if (!a.h.D) {
    throw new E(63);
  }
  if (I(a.mode)) {
    throw new E(31);
  }
  if (32768 !== (a.mode & 61440)) {
    throw new E(28);
  }
  var c = pc(a, "w");
  if (c) {
    throw new E(c);
  }
  a.h.D(a, {size:b, timestamp:Date.now()});
}
function Gc(a, b, c) {
  if ("" === a) {
    throw new E(44);
  }
  if ("string" == typeof b) {
    var d = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090,}[b];
    if ("undefined" == typeof d) {
      throw Error(`Unknown file open mode: ${b}`);
    }
    b = d;
  }
  c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" == typeof a) {
    var e = a;
  } else {
    a = tb(a);
    try {
      e = K(a, {V:!(b & 131072)}).node;
    } catch (f) {
    }
  }
  d = !1;
  if (b & 64) {
    if (e) {
      if (b & 128) {
        throw new E(20);
      }
    } else {
      e = Ac(a, c, 0), d = !0;
    }
  }
  if (!e) {
    throw new E(44);
  }
  8192 === (e.mode & 61440) && (b &= -513);
  if (b & 65536 && !I(e.mode)) {
    throw new E(54);
  }
  if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : I(e.mode) && ("r" !== qc(b) || b & 512) ? 31 : pc(e, qc(b)) : 44)) {
    throw new E(c);
  }
  b & 512 && !d && Fc(e, 0);
  b &= -131713;
  e = uc({node:e, path:lc(e), flags:b, seekable:!0, position:0, j:e.j, Pc:[], error:!1});
  e.j.open && e.j.open(e);
  !l.logReadFiles || b & 1 || (Hc ||= {}, a in Hc || (Hc[a] = 1));
  return e;
}
function Ic(a) {
  if (null === a.o) {
    throw new E(8);
  }
  a.Z && (a.Z = null);
  try {
    a.j.close && a.j.close(a);
  } catch (b) {
    throw b;
  } finally {
    dc[a.o] = null;
  }
  a.o = null;
}
function Jc(a, b, c) {
  if (null === a.o) {
    throw new E(8);
  }
  if (!a.seekable || !a.j.aa) {
    throw new E(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new E(28);
  }
  a.position = a.j.aa(a, b, c);
  a.Pc = [];
  return a.position;
}
function Kc(a, b, c, d, e, f) {
  p(0 <= c);
  if (0 > d || 0 > e) {
    throw new E(28);
  }
  if (null === a.o) {
    throw new E(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new E(8);
  }
  if (I(a.node.mode)) {
    throw new E(31);
  }
  if (!a.j.write) {
    throw new E(28);
  }
  a.seekable && a.flags & 1024 && Jc(a, 0, 2);
  var g = "undefined" != typeof e;
  if (!g) {
    e = a.position;
  } else if (!a.seekable) {
    throw new E(70);
  }
  b = a.j.write(a, b, c, d, e, f);
  g || (a.position += b);
  return b;
}
function Wb(a, b, c = {}) {
  c.flags = c.flags || 577;
  a = Gc(a, c.flags, c.mode);
  if ("string" == typeof b) {
    var d = new Uint8Array(Db(b) + 1);
    b = Eb(b, d, 0, d.length);
    Kc(a, d, 0, b, void 0, c.Ab);
  } else if (ArrayBuffer.isView(b)) {
    Kc(a, b, 0, b.byteLength, void 0, c.Ab);
  } else {
    throw Error("Unsupported data type");
  }
  Ic(a);
}
var Lc;
function Mc(a, b, c) {
  a = tb("/dev/" + a);
  var d = Sb(!!b, !!c);
  Nc ||= 64;
  var e = Nc++ << 8 | 0;
  Ib(e, {open(f) {
    f.seekable = !1;
  }, close() {
    c?.buffer?.length && c(10);
  }, read(f, g, h, k) {
    for (var m = 0, r = 0; r < k; r++) {
      try {
        var x = b();
      } catch (z) {
        throw new E(29);
      }
      if (void 0 === x && 0 === m) {
        throw new E(6);
      }
      if (null === x || void 0 === x) {
        break;
      }
      m++;
      g[h + r] = x;
    }
    m && (f.node.timestamp = Date.now());
    return m;
  }, write(f, g, h, k) {
    for (var m = 0; m < k; m++) {
      try {
        c(g[h + m]);
      } catch (r) {
        throw new E(29);
      }
    }
    k && (f.node.timestamp = Date.now());
    return m;
  }});
  Cc(a, d, e);
}
var Nc, L = {}, Hc;
function Oc(a, b, c) {
  if ("/" === b.charAt(0)) {
    return b;
  }
  a = -100 === a ? yb : tc(a).path;
  if (0 == b.length) {
    if (!c) {
      throw new E(44);
    }
    return a;
  }
  return tb(a + "/" + b);
}
function Pc(a, b, c) {
  a = a(b);
  w[c >> 2] = a.ec;
  w[c + 4 >> 2] = a.mode;
  A[c + 8 >> 2] = a.yc;
  w[c + 12 >> 2] = a.uid;
  w[c + 16 >> 2] = a.oc;
  w[c + 20 >> 2] = a.sa;
  Ba[c + 24 >> 3] = BigInt(a.size);
  w[c + 32 >> 2] = 4096;
  w[c + 36 >> 2] = a.Zb;
  b = a.Vb.getTime();
  var d = a.Pa.getTime(), e = a.cc.getTime();
  Ba[c + 40 >> 3] = BigInt(Math.floor(b / 1000));
  A[c + 48 >> 2] = b % 1000 * 1000;
  Ba[c + 56 >> 3] = BigInt(Math.floor(d / 1000));
  A[c + 64 >> 2] = d % 1000 * 1000;
  Ba[c + 72 >> 3] = BigInt(Math.floor(e / 1000));
  A[c + 80 >> 2] = e % 1000 * 1000;
  Ba[c + 88 >> 3] = BigInt(a.rc);
  return 0;
}
var Qc = void 0;
function Rc(a, b) {
  if (1 === a.type && a.M) {
    throw new E(53);
  }
  var c = a.ja.shift();
  if (!c) {
    if (1 === a.type) {
      a = a.L[a.R + ":" + a.S];
      if (!a) {
        throw new E(53);
      }
      if (a.i.readyState === a.i.CLOSING || a.i.readyState === a.i.CLOSED) {
        return null;
      }
    }
    throw new E(6);
  }
  var d = c.data.byteLength || c.data.length, e = c.data.byteOffset || 0, f = c.data.buffer || c.data;
  b = Math.min(b, d);
  var g = {buffer:new Uint8Array(f, e, b), s:c.s, port:c.port};
  1 === a.type && b < d && (c.data = new Uint8Array(f, e + b, d - b), a.ja.unshift(c));
  return g;
}
function Sc(a, b, c, d, e, f) {
  if (2 === a.type) {
    if (void 0 === e || void 0 === f) {
      e = a.R, f = a.S;
    }
    if (void 0 === e || void 0 === f) {
      throw new E(17);
    }
  } else {
    e = a.R, f = a.S;
  }
  var g = a.L[e + ":" + f];
  if (1 === a.type) {
    if (!g || g.i.readyState === g.i.CLOSING || g.i.readyState === g.i.CLOSED) {
      throw new E(53);
    }
    if (g.i.readyState === g.i.CONNECTING) {
      throw new E(6);
    }
  }
  ArrayBuffer.isView(b) && (c += b.byteOffset, b = b.buffer);
  b = b.slice(c, c + d);
  if (2 === a.type && (!g || g.i.readyState !== g.i.OPEN)) {
    return g && g.i.readyState !== g.i.CLOSING && g.i.readyState !== g.i.CLOSED || (g = Tc(a, e, f)), g.Ga.push(b), d;
  }
  try {
    return g.i.send(b), d;
  } catch (h) {
    throw new E(28);
  }
}
function Uc(a, b) {
  function c() {
    l.websocket.fa("open", a.stream.o);
    try {
      for (var f = b.Ga.shift(); f;) {
        b.i.send(f), f = b.Ga.shift();
      }
    } catch (g) {
      b.i.close();
    }
  }
  function d(f) {
    if ("string" == typeof f) {
      f = (new TextEncoder()).encode(f);
    } else {
      p(void 0 !== f.byteLength);
      if (0 == f.byteLength) {
        return;
      }
      f = new Uint8Array(f);
    }
    var g = e;
    e = !1;
    g && 10 === f.length && 255 === f[0] && 255 === f[1] && 255 === f[2] && 255 === f[3] && 112 === f[4] && 111 === f[5] && 114 === f[6] && 116 === f[7] ? (f = f[8] << 8 | f[9], delete a.L[b.s + ":" + b.port], b.port = f, a.L[b.s + ":" + b.port] = b) : (a.ja.push({s:b.s, port:b.port, data:f}), l.websocket.fa("message", a.stream.o));
  }
  var e = !0;
  ja ? (b.i.lb("open", c), b.i.lb("message", function(f, g) {
    g && d((new Uint8Array(f)).buffer);
  }), b.i.lb("close", function() {
    l.websocket.fa("close", a.stream.o);
  }), b.i.lb("error", function() {
    a.error = 14;
    l.websocket.fa("error", [a.stream.o, a.error, "ECONNREFUSED: Connection refused"]);
  })) : (b.i.onopen = c, b.i.onclose = function() {
    l.websocket.fa("close", a.stream.o);
  }, b.i.onmessage = function(f) {
    d(f.data);
  }, b.i.onerror = function() {
    a.error = 14;
    l.websocket.fa("error", [a.stream.o, a.error, "ECONNREFUSED: Connection refused"]);
  });
}
function Tc(a, b, c) {
  if ("object" == typeof b) {
    var d = b;
    c = b = null;
  }
  if (d) {
    if (d.yb) {
      b = d.yb.Dd, c = d.yb.Ed;
    } else {
      c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url);
      if (!c) {
        throw Error("WebSocket URL must be in the format ws(s)://address:port");
      }
      b = c[1];
      c = parseInt(c[2], 10);
    }
  } else {
    try {
      var e = l.websocket && "object" === typeof l.websocket, f = "ws://";
      e && "string" === typeof l.websocket.url && (f = l.websocket.url);
      if ("ws://" === f || "wss://" === f) {
        var g = b.split("/");
        f = f + g[0] + ":" + c + "/" + g.slice(1).join("/");
      }
      g = "binary";
      e && "string" === typeof l.websocket.subprotocol && (g = l.websocket.subprotocol);
      var h = void 0;
      "null" !== g && (h = g = g.replace(/^ +| +$/g, "").split(/ *, */));
      e && null === l.websocket.subprotocol && (h = void 0);
      d = new WebSocket(f, h);
      d.binaryType = "arraybuffer";
    } catch (k) {
      throw new E(23);
    }
  }
  b = {s:b, port:c, i:d, Ga:[]};
  a.L[b.s + ":" + b.port] = b;
  Uc(a, b);
  2 === a.type && "undefined" != typeof a.ma && b.Ga.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.ma & 65280) >> 8, a.ma & 255]));
  return b;
}
var Vc = {v() {
  l.websocket = l.websocket && "object" === typeof l.websocket ? l.websocket : {};
  l.websocket.ab = {};
  l.websocket.on = function(a, b) {
    "function" === typeof b && (this.ab[a] = b);
    return this;
  };
  l.websocket.fa = function(a, b) {
    "function" === typeof this.ab[a] && this.ab[a].call(this, b);
  };
  return Ob(null, "/", 16895, 0);
}, j:{ia(a) {
  a = a.node.ka;
  return a.la.ia(a);
}, Ja(a, b, c) {
  a = a.node.ka;
  return a.la.Ja(a, b, c);
}, read(a, b, c, d) {
  a = Rc(a.node.ka, d);
  if (!a) {
    return 0;
  }
  b.set(a.buffer, c);
  return a.buffer.length;
}, write(a, b, c, d) {
  return Sc(a.node.ka, b, c, d);
}, close(a) {
  a = a.node.ka;
  a.la.close(a);
},}, Qa() {
  Vc.Qa.current || (Vc.Qa.current = 0);
  return "socket[" + Vc.Qa.current++ + "]";
}, Rc:{ia(a) {
  if (1 === a.type && a.M) {
    return a.pending.length ? 65 : 0;
  }
  var b = 0, c = 1 === a.type ? a.L[a.R + ":" + a.S] : null;
  if (a.ja.length || !c || c && c.i.readyState === c.i.CLOSING || c && c.i.readyState === c.i.CLOSED) {
    b |= 65;
  }
  if (!c || c && c.i.readyState === c.i.OPEN) {
    b |= 4;
  }
  if (c && c.i.readyState === c.i.CLOSING || c && c.i.readyState === c.i.CLOSED) {
    b |= 16;
  }
  return b;
}, Ja(a, b, c) {
  switch(b) {
    case 21531:
      return b = 0, a.ja.length && (b = a.ja[0].data.length), w[c >> 2] = b, 0;
    default:
      return 28;
  }
}, close(a) {
  if (a.M) {
    try {
      a.M.close();
    } catch (e) {
    }
    a.M = null;
  }
  for (var b = Object.keys(a.L), c = 0; c < b.length; c++) {
    var d = a.L[b[c]];
    try {
      d.i.close();
    } catch (e) {
    }
    delete a.L[d.s + ":" + d.port];
  }
  return 0;
}, bind(a, b, c) {
  if ("undefined" != typeof a.rb || "undefined" != typeof a.ma) {
    throw new E(28);
  }
  a.rb = b;
  a.ma = c;
  if (2 === a.type) {
    a.M && (a.M.close(), a.M = null);
    try {
      if (!ja) {
        throw new E(138);
      }
    } catch (d) {
      if ("ErrnoError" !== d.name) {
        throw d;
      }
      if (138 !== d.g) {
        throw d;
      }
    }
  }
}, connect(a, b, c) {
  if (a.M) {
    throw new E(138);
  }
  if ("undefined" != typeof a.R && "undefined" != typeof a.S) {
    var d = a.L[a.R + ":" + a.S];
    if (d) {
      if (d.i.readyState === d.i.CONNECTING) {
        throw new E(7);
      }
      throw new E(30);
    }
  }
  b = Tc(a, b, c);
  a.R = b.s;
  a.S = b.port;
  throw new E(26);
}, accept(a) {
  if (!a.M || !a.pending.length) {
    throw new E(28);
  }
  var b = a.pending.shift();
  b.stream.flags = a.stream.flags;
  return b;
}, od(a, b) {
  if (b) {
    if (void 0 === a.R || void 0 === a.S) {
      throw new E(53);
    }
    b = a.R;
    a = a.S;
  } else {
    b = a.rb || 0, a = a.ma || 0;
  }
  return {s:b, port:a};
},},}, Wc = a => {
  a = (a = dc[a]) && 49152 === (a.node.mode & 49152) ? a.node.ka : null;
  if (!a) {
    throw new E(8);
  }
  return a;
}, Xc = a => {
  a = a.split(".");
  for (var b = 0; 4 > b; b++) {
    var c = Number(a[b]);
    if (isNaN(c)) {
      return null;
    }
    a[b] = c;
  }
  return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0;
}, Zc = a => {
  var b, c, d = [];
  if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a)) {
    return null;
  }
  if ("::" === a) {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
  0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"), a = a.split(":"), a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]), a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]), a = a.slice(0, a.length - 2)) : a = a.split(":");
  for (b = c = 0; b < a.length; b++) {
    if ("string" == typeof a[b]) {
      if ("Z" === a[b]) {
        for (c = 0; c < 8 - a.length + 1; c++) {
          d[b + c] = 0;
        }
        --c;
      } else {
        d[b + c] = Yc(parseInt(a[b], 16));
      }
    } else {
      d[b + c] = a[b];
    }
  }
  return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]];
}, $c = (a, b, c, d, e) => {
  switch(b) {
    case 2:
      c = Xc(c);
      v.fill(0, a, a + 16);
      e && (w[e >> 2] = 16);
      za[a >> 1] = b;
      w[a + 4 >> 2] = c;
      za[a + 2 >> 1] = Yc(d);
      break;
    case 10:
      c = Zc(c);
      v.fill(0, a, a + 28);
      e && (w[e >> 2] = 28);
      w[a >> 2] = b;
      w[a + 8 >> 2] = c[0];
      w[a + 12 >> 2] = c[1];
      w[a + 16 >> 2] = c[2];
      w[a + 20 >> 2] = c[3];
      za[a + 2 >> 1] = Yc(d);
      break;
    default:
      return 5;
  }
  return 0;
}, ad = 1, bd = {}, cd = {};
function dd(a) {
  var b = Xc(a);
  if (null !== b) {
    return a;
  }
  b = Zc(a);
  if (null !== b) {
    return a;
  }
  bd[a] ? b = bd[a] : (b = ad++, p(65535 > b, "exceeded max address mappings of 65535"), b = "172.29." + (b & 255) + "." + (b & 65280), cd[b] = a, bd[a] = b);
  return b;
}
var ed = a => (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255), hd = a => {
  var b = "", c, d = 0, e = 0, f = 0, g = 0;
  a = [a[0] & 65535, a[0] >> 16, a[1] & 65535, a[1] >> 16, a[2] & 65535, a[2] >> 16, a[3] & 65535, a[3] >> 16];
  var h = !0;
  for (c = 0; 5 > c; c++) {
    if (0 !== a[c]) {
      h = !1;
      break;
    }
  }
  if (h) {
    c = ed(a[6] | a[7] << 16);
    if (-1 === a[5]) {
      return "::ffff:" + c;
    }
    if (0 === a[5]) {
      return "0.0.0.0" === c && (c = ""), "0.0.0.1" === c && (c = "1"), "::" + c;
    }
  }
  for (c = 0; 8 > c; c++) {
    0 === a[c] && (1 < c - e && (g = 0), e = c, g++), g > d && (d = g, f = c - d + 1);
  }
  for (c = 0; 8 > c; c++) {
    1 < d && 0 === a[c] && c >= f && c < f + d ? c === f && (b += ":", 0 === f && (b += ":")) : (b += Number(fd(a[c] & 65535)).toString(16), b += 7 > c ? ":" : "");
  }
  return b;
}, jd = (a, b) => {
  var c = za[a >> 1], d = fd(Aa[a + 2 >> 1]);
  switch(c) {
    case 2:
      if (16 !== b) {
        return {g:28};
      }
      a = w[a + 4 >> 2];
      a = ed(a);
      break;
    case 10:
      if (28 !== b) {
        return {g:28};
      }
      a = [w[a + 8 >> 2], w[a + 12 >> 2], w[a + 16 >> 2], w[a + 20 >> 2]];
      a = hd(a);
      break;
    default:
      return {g:5};
  }
  return {family:c, s:a, port:d};
}, kd = (a, b, c) => {
  if (c && 0 === a) {
    return null;
  }
  a = jd(a, b);
  if (a.g) {
    throw new E(a.g);
  }
  b = a.s;
  a.s = (cd[b] ? cd[b] : null) || a.s;
  return a;
};
function ld() {
  p(void 0 != Qc);
  var a = w[+Qc >> 2];
  Qc += 4;
  return a;
}
var md = (a, b, c) => {
  p("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  return Eb(a, v, b, c);
}, nd = a => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), od = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], pd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], qd = 0, Cd = (a, b) => {
  rd = a;
  sd = b;
  if (td) {
    if (ud || (qd += 1, ud = !0), 0 == a) {
      vd = function() {
        var d = Math.max(0, wd + b - xd()) | 0;
        setTimeout(yd, d);
      }, zd = "timeout";
    } else if (1 == a) {
      vd = function() {
        Ad(yd);
      }, zd = "rAF";
    } else if (2 == a) {
      if ("undefined" == typeof Bd) {
        if ("undefined" == typeof setImmediate) {
          var c = [];
          addEventListener("message", d => {
            if ("setimmediate" === d.data || "setimmediate" === d.data.target) {
              d.stopPropagation(), c.shift()();
            }
          }, !0);
          Bd = function(d) {
            c.push(d);
            ia ? (void 0 === l.setImmediates && (l.setImmediates = []), l.setImmediates.push(d), postMessage({target:"setimmediate"})) : postMessage("setimmediate", "*");
          };
        } else {
          Bd = setImmediate;
        }
      }
      vd = function() {
        Bd(yd);
      };
      zd = "immediate";
    }
  } else {
    n("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.");
  }
}, xd;
xd = () => performance.now();
var Dd = a => {
  var b = a.getExtension("ANGLE_instanced_arrays");
  b && (a.vertexAttribDivisor = (c, d) => b.vertexAttribDivisorANGLE(c, d), a.drawArraysInstanced = (c, d, e, f) => b.drawArraysInstancedANGLE(c, d, e, f), a.drawElementsInstanced = (c, d, e, f, g) => b.drawElementsInstancedANGLE(c, d, e, f, g));
}, Ed = a => {
  var b = a.getExtension("OES_vertex_array_object");
  b && (a.createVertexArray = () => b.createVertexArrayOES(), a.deleteVertexArray = c => b.deleteVertexArrayOES(c), a.bindVertexArray = c => b.bindVertexArrayOES(c), a.isVertexArray = c => b.isVertexArrayOES(c));
}, Fd = a => {
  var b = a.getExtension("WEBGL_draw_buffers");
  b && (a.drawBuffers = (c, d) => b.drawBuffersWEBGL(c, d));
}, Gd = a => {
  a.fd = a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
}, Hd = a => {
  a.rd = a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
}, Id = a => {
  var b = "ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw".split(" ");
  return (a.getSupportedExtensions() || []).filter(c => b.includes(c));
}, Jd = 1, Kd = [], Ld = [], Md = [], Nd = [], Od = [], Pd = [], Qd = [], Rd = [], Sd = [], Td = [], Ud = {}, Vd = {}, Wd = 4, Xd = a => {
  for (var b = Jd++, c = a.length; c < b; c++) {
    a[c] = null;
  }
  return b;
}, Yd = (a, b, c, d) => {
  for (var e = 0; e < a; e++) {
    var f = M[c](), g = f && Xd(d);
    f ? (f.name = g, d[g] = f) : N ||= 1282;
    w[b + 4 * e >> 2] = g;
  }
}, ae = (a, b) => {
  b.Ta && (b.preserveDrawingBuffer = !0);
  var c = 1 < b.kb ? a.getContext("webgl2", b) : a.getContext("webgl", b);
  if (c) {
    a = Xd(Rd);
    var d = {handle:a, attributes:b, version:b.kb, A:c};
    c.canvas && (c.canvas.$a = d);
    Rd[a] = d;
    ("undefined" == typeof b.Eb || b.Eb) && Zd(d);
    if (b.Ta) {
      b = d.A;
      c = b.createFramebuffer();
      b.bindFramebuffer(36160, c);
      d.hb = c;
      d.Cb = !1;
      b.getContextAttributes().antialias && (d.Cb = !0);
      d.oa = b.createTexture();
      d.Ea = b.createRenderbuffer();
      $d(d);
      b.bindTexture(3553, d.oa);
      b.texParameteri(3553, 10241, 9728);
      b.texParameteri(3553, 10240, 9728);
      b.texParameteri(3553, 10242, 33071);
      b.texParameteri(3553, 10243, 33071);
      b.texImage2D(3553, 0, 6408, b.canvas.width, b.canvas.height, 0, 6408, 5121, null);
      b.framebufferTexture2D(36160, 36064, 3553, d.oa, 0);
      b.bindTexture(3553, null);
      b.bindRenderbuffer(36161, d.Ea);
      b.renderbufferStorage(36161, 33189, b.canvas.width, b.canvas.height);
      b.framebufferRenderbuffer(36160, 36096, 36161, d.Ea);
      b.bindRenderbuffer(36161, null);
      c = b.createBuffer();
      b.bindBuffer(34962, c);
      b.bufferData(34962, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), 35044);
      b.bindBuffer(34962, null);
      d.Xb = c;
      c = b.createShader(35633);
      b.shaderSource(c, "attribute vec2 pos;varying lowp vec2 tex;void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }");
      b.compileShader(c);
      var e = b.createShader(35632);
      b.shaderSource(e, "varying lowp vec2 tex;uniform sampler2D sampler;void main() { gl_FragColor = texture2D(sampler, tex); }");
      b.compileShader(e);
      var f = b.createProgram();
      b.attachShader(f, c);
      b.attachShader(f, e);
      b.linkProgram(f);
      d.Wb = f;
      d.F = b.getAttribLocation(f, "pos");
      b.useProgram(f);
      b.uniform1i(b.getUniformLocation(f, "sampler"), 0);
      b.useProgram(null);
      d.Fa = void 0;
      b.createVertexArray && (d.Fa = b.createVertexArray(), b.bindVertexArray(d.Fa), b.enableVertexAttribArray(d.F), b.bindVertexArray(null));
    }
  } else {
    a = 0;
  }
  return a;
}, $d = a => {
  var b = a.A;
  if (a.oa) {
    var c = b.getParameter(32873);
    b.bindTexture(3553, a.oa);
    b.texImage2D(3553, 0, 6408, b.drawingBufferWidth, b.drawingBufferHeight, 0, 6408, 5121, null);
    b.bindTexture(3553, c);
  }
  a.Ea && (c = b.getParameter(36007), b.bindRenderbuffer(36161, a.Ea), b.renderbufferStorage(36161, 33189, b.drawingBufferWidth, b.drawingBufferHeight), b.bindRenderbuffer(36161, c));
}, be = () => {
  var a = O, b = a.A, c = b.getParameter(3089);
  c && b.disable(3089);
  var d = b.getParameter(36006);
  if (b.blitFramebuffer && !a.Cb) {
    b.bindFramebuffer(36008, a.hb), b.bindFramebuffer(36009, null), b.blitFramebuffer(0, 0, b.canvas.width, b.canvas.height, 0, 0, b.canvas.width, b.canvas.height, 16384, 9728);
  } else {
    b.bindFramebuffer(36160, null);
    var e = b.getParameter(35725);
    b.useProgram(a.Wb);
    var f = b.getParameter(34964);
    b.bindBuffer(34962, a.Xb);
    var g = b.getParameter(34016);
    b.activeTexture(33984);
    var h = b.getParameter(32873);
    b.bindTexture(3553, a.oa);
    var k = b.getParameter(3042);
    k && b.disable(3042);
    var m = b.getParameter(2884);
    m && b.disable(2884);
    var r = b.getParameter(2929);
    r && b.disable(2929);
    var x = b.getParameter(2960);
    x && b.disable(2960);
    function qa() {
      b.vertexAttribPointer(a.F, 2, 5126, !1, 0, 0);
      b.drawArrays(5, 0, 4);
    }
    if (a.Fa) {
      var z = b.getParameter(34229);
      b.bindVertexArray(a.Fa);
      qa();
      b.bindVertexArray(z);
    } else {
      z = {buffer:b.getVertexAttrib(a.F, 34975), size:b.getVertexAttrib(a.F, 34339), Kc:b.getVertexAttrib(a.F, 34340), type:b.getVertexAttrib(a.F, 34341), zc:b.getVertexAttrib(a.F, 34922), yd:b.getVertexAttribOffset(a.F, 34373),};
      for (var q = b.getParameter(34921), y = [], u = 0; u < q; ++u) {
        var F = b.getVertexAttrib(u, 34338), H = u == a.F;
        F && !H && b.disableVertexAttribArray(u);
        !F && H && b.enableVertexAttribArray(u);
        y[u] = F;
      }
      qa();
      for (u = 0; u < q; ++u) {
        F = y[u], H = u == a.F, F && !H && b.enableVertexAttribArray(u), !F && H && b.disableVertexAttribArray(u);
      }
      b.bindBuffer(34962, z.buffer);
      b.vertexAttribPointer(a.F, z.size, z.type, z.zc, z.Kc, z.offset);
    }
    x && b.enable(2960);
    r && b.enable(2929);
    m && b.enable(2884);
    k && b.enable(3042);
    b.bindTexture(3553, h);
    b.activeTexture(g);
    b.bindBuffer(34962, f);
    b.useProgram(e);
  }
  b.bindFramebuffer(36160, d);
  c && b.enable(3089);
}, ce = a => {
  O = Rd[a];
  l.Da = M = O?.A;
  return !(a && !M);
}, Zd = a => {
  a ||= O;
  if (!a.qc) {
    a.qc = !0;
    var b = a.A;
    Dd(b);
    Ed(b);
    Fd(b);
    Gd(b);
    Hd(b);
    2 <= a.version && (b.Db = b.getExtension("EXT_disjoint_timer_query_webgl2"));
    if (2 > a.version || !b.Db) {
      b.Db = b.getExtension("EXT_disjoint_timer_query");
    }
    b.xc = b.getExtension("WEBGL_multi_draw");
    Id(b).forEach(c => {
      c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
    });
  }
}, de = {}, N, O, ee = a => {
  ya = a;
  mb || 0 < qd || (l.onExit?.(a), xa = !0);
  oa(a, new jb(a));
}, he = (a, b) => {
  ya = a;
  if (!(mb || 0 < qd)) {
    p(!Qa);
    Ga();
    fe();
    kb(Na);
    Lc = !1;
    ge(0);
    for (var c = 0; c < dc.length; c++) {
      var d = dc[c];
      d && Ic(d);
    }
    J.Ac();
    Qa = !0;
  }
  (mb || 0 < qd) && !b && (b = `program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${qd}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`, ca(b), n(b));
  ee(a);
}, je = a => {
  if (a instanceof jb || "unwind" == a) {
    return ya;
  }
  Ga();
  a instanceof WebAssembly.RuntimeError && 0 >= ie() && n("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 5242880)");
  oa(1, a);
}, ke = () => {
  if (!(Qa || mb || 0 < qd)) {
    try {
      he(ya);
    } catch (a) {
      je(a);
    }
  }
}, se = (a, b, c, d, e) => {
  function f() {
    return g < le ? (p(0 < qd), --qd, ke(), !1) : !0;
  }
  p(!td, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  td = a;
  me = d;
  var g = le;
  ud = !1;
  yd = function() {
    if (!xa) {
      if (0 < ne.length) {
        var h = ne.shift();
        h.ld(h.Vc);
        if (oe) {
          var k = oe, m = 0 == k % 1 ? k - 1 : Math.floor(k);
          oe = h.ed ? m : (8 * k + (m + 0.5)) / 9;
        }
        l.setStatus && (h = l.statusMessage || "Please wait...", k = oe, m = pe.kd, k ? k < m ? l.setStatus("{message} ({expected - remaining}/{expected})") : l.setStatus(h) : l.setStatus(""));
        f() && setTimeout(yd, 0);
      } else {
        f() && (qe = qe + 1 | 0, 1 == rd && 1 < sd && 0 != qe % sd ? vd() : (0 == rd && (wd = xd()), "timeout" === zd && l.Da && (hb("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), zd = ""), xa || l.preMainLoop && !1 === l.preMainLoop() || (re(a), l.postMainLoop?.()), Ga(), f() && ("object" == typeof SDL && SDL.audio?.Bd?.(), 
        vd())));
      }
    }
  };
  e || (b && 0 < b ? Cd(0, 1000.0 / b) : Cd(1, 1), vd());
  if (c) {
    throw "unwind";
  }
}, re = a => {
  if (Qa || xa) {
    n("user callback triggered after runtime exited or application aborted.  Ignoring.");
  } else {
    try {
      a(), ke();
    } catch (b) {
      je(b);
    }
  }
}, te = a => {
  qd += 1;
  setTimeout(() => {
    p(0 < qd);
    --qd;
    re(a);
  }, 10000);
}, ud = !1, vd = null, zd = "", le = 0, td = null, me = 0, rd = 0, sd = 0, qe = 0, ne = [];
function ue() {
  vd = null;
  le++;
}
function we() {
  le++;
  var a = rd, b = sd, c = td;
  td = null;
  se(c, 0, !1, me, !0);
  Cd(a, b);
  vd();
}
var pe = {}, wd, yd, oe, xe = !1, ye = !1, ze = [];
function Ae() {
  function a() {
    ye = document.pointerLockElement === l.canvas || document.mozPointerLockElement === l.canvas || document.webkitPointerLockElement === l.canvas || document.msPointerLockElement === l.canvas;
  }
  if (!Be) {
    Be = !0;
    Rb.push({canHandle:function(c) {
      return !l.vd && /\.(jpg|jpeg|png|bmp)$/i.test(c);
    }, handle:function(c, d, e, f) {
      var g = new Blob([c], {type:Ce(d)});
      g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer], {type:Ce(d)}));
      var h = URL.createObjectURL(g);
      p("string" == typeof h, "createObjectURL must return a url as a string");
      var k = new Image();
      k.onload = () => {
        p(k.complete, `Image ${d} could not be decoded`);
        var m = document.createElement("canvas");
        m.width = k.width;
        m.height = k.height;
        m.getContext("2d").drawImage(k, 0, 0);
        URL.revokeObjectURL(h);
        e?.(c);
      };
      k.onerror = () => {
        n(`Image ${h} could not be decoded`);
        f?.();
      };
      k.src = h;
    }});
    Rb.push({canHandle:function(c) {
      return !l.ud && c.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(c, d, e) {
      function f() {
        g || (g = !0, e?.(c));
      }
      var g = !1, h = URL.createObjectURL(new Blob([c], {type:Ce(d)}));
      p("string" == typeof h, "createObjectURL must return a url as a string");
      var k = new Audio();
      k.addEventListener("canplaythrough", () => f(k), !1);
      k.onerror = function() {
        if (!g) {
          n(`warning: browser could not fully decode audio ${d}, trying slower base64 approach`);
          for (var m = "", r = 0, x = 0, z = 0; z < c.length; z++) {
            for (r = r << 8 | c[z], x += 8; 6 <= x;) {
              var q = r >> x - 6 & 63;
              x -= 6;
              m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[q];
            }
          }
          2 == x ? (m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r & 3) << 4], m += "==") : 4 == x && (m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r & 15) << 2], m += "=");
          k.src = "data:audio/x-" + d.substr(-3) + ";base64," + m;
          f(k);
        }
      };
      k.src = h;
      te(() => {
        f(k);
      });
    }});
    var b = l.canvas;
    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || (() => {
    }), b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {
    }), b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), l.elementPointerLock && b.addEventListener("click", c => {
      !ye && l.canvas.requestPointerLock && (l.canvas.requestPointerLock(), c.preventDefault());
    }, !1));
  }
}
var De = !1, Ee = void 0, Fe = void 0;
function Ge() {
  if (!xe) {
    return !1;
  }
  (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || (() => {
  })).apply(document, []);
  return !0;
}
var He = 0;
function Ad(a) {
  if ("function" == typeof requestAnimationFrame) {
    requestAnimationFrame(a);
  } else {
    var b = Date.now();
    if (0 === He) {
      He = b + 1000 / 60;
    } else {
      for (; b + 2 >= He;) {
        He += 1000 / 60;
      }
    }
    setTimeout(a, Math.max(He - b, 0));
  }
}
function Ce(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
var Ie = [];
function Je() {
  var a = l.canvas;
  Ie.forEach(b => b(a.width, a.height));
}
function Ke(a, b, c) {
  b && c ? (a.Sc = b, a.pc = c) : (b = a.Sc, c = a.pc);
  var d = b, e = c;
  l.forcedAspectRatio && 0 < l.forcedAspectRatio && (d / e < l.forcedAspectRatio ? d = Math.round(e * l.forcedAspectRatio) : e = Math.round(d / l.forcedAspectRatio));
  if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var f = Math.min(screen.width / d, screen.height / e);
    d = Math.round(d * f);
    e = Math.round(e * f);
  }
  Fe ? (a.width != d && (a.width = d), a.height != e && (a.height = e), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var Bd, Be, Le = [], Me = {}, Ne = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0], Oe = a => {
  a = 2 < a ? D(a) : a;
  return Ne[a] || ("undefined" != typeof document ? document.querySelector(a) : void 0);
}, Pe = ["default", "low-power", "high-performance"], Qe = {}, Se = () => {
  if (!Re) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:na || "./this.program"}, b;
    for (b in Qe) {
      void 0 === Qe[b] ? delete a[b] : a[b] = Qe[b];
    }
    var c = [];
    for (b in a) {
      c.push(`${b}=${a[b]}`);
    }
    Re = c;
  }
  return Re;
}, Re, Te = [];
function Ue() {
  var a = Id(M);
  return a = a.concat(a.map(b => "GL_" + b));
}
var Ve = (a, b, c) => {
  if (b) {
    var d = void 0;
    switch(a) {
      case 36346:
        d = 1;
        break;
      case 36344:
        0 != c && 1 != c && (N ||= 1280);
        return;
      case 34814:
      case 36345:
        d = 0;
        break;
      case 34466:
        var e = M.getParameter(34467);
        d = e ? e.length : 0;
        break;
      case 33309:
        if (2 > O.version) {
          N ||= 1282;
          return;
        }
        d = Ue().length;
        break;
      case 33307:
      case 33308:
        if (2 > O.version) {
          N ||= 1280;
          return;
        }
        d = 33307 == a ? 3 : 0;
    }
    if (void 0 === d) {
      switch(e = M.getParameter(a), typeof e) {
        case "number":
          d = e;
          break;
        case "boolean":
          d = e ? 1 : 0;
          break;
        case "string":
          N ||= 1280;
          return;
        case "object":
          if (null === e) {
            switch(a) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                d = 0;
                break;
              default:
                N ||= 1280;
                return;
            }
          } else {
            if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
              for (a = 0; a < e.length; ++a) {
                switch(c) {
                  case 0:
                    w[b + 4 * a >> 2] = e[a];
                    break;
                  case 2:
                    B[b + 4 * a >> 2] = e[a];
                    break;
                  case 4:
                    t[b + a] = e[a] ? 1 : 0;
                }
              }
              return;
            }
            try {
              d = e.name | 0;
            } catch (f) {
              N ||= 1280;
              n(`GL_INVALID_ENUM in glGet${c}v: Unknown object returned from WebGL getParameter(${a})! (error: ${f})`);
              return;
            }
          }
          break;
        default:
          N ||= 1280;
          n(`GL_INVALID_ENUM in glGet${c}v: Native code calling glGet${c}v(${a}) and it returns ${e} of type ${typeof e}!`);
          return;
      }
    }
    switch(c) {
      case 1:
        c = d;
        A[b >> 2] = c;
        A[b + 4 >> 2] = (c - A[b >> 2]) / 4294967296;
        a = 0 <= c ? A[b >> 2] + 4294967296 * A[b + 4 >> 2] : A[b >> 2] + 4294967296 * w[b + 4 >> 2];
        b >>= 2;
        a != c && hb(`writeI53ToI64() out of range: serialized JS Number ${c} to Wasm heap as bytes lo=${Ha(A[b])}, hi=${Ha(A[b + 1])}, which deserializes back to ${a} instead!`);
        break;
      case 0:
        w[b >> 2] = d;
        break;
      case 2:
        B[b >> 2] = d;
        break;
      case 4:
        t[b] = d ? 1 : 0;
    }
  } else {
    N ||= 1281;
  }
}, Xe = a => {
  var b = Db(a) + 1, c = We(b);
  c && md(a, c, b);
  return c;
}, Ye = a => "]" == a.slice(-1) && a.lastIndexOf("["), Ze = a => {
  a -= 5120;
  return 0 == a ? t : 1 == a ? v : 2 == a ? za : 4 == a ? w : 6 == a ? B : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? A : Aa;
}, $e = (a, b, c, d, e) => {
  a = Ze(a);
  var f = Wd;
  b = d * (c * ({5:3, 6:4, 8:2, 29502:3, 29504:4, 26917:2, 26918:2, 29846:3, 29847:4}[b - 6402] || 1) * a.BYTES_PER_ELEMENT + f - 1 & -f);
  return a.subarray(e >>> 31 - Math.clz32(a.BYTES_PER_ELEMENT), e + b >>> 31 - Math.clz32(a.BYTES_PER_ELEMENT));
}, P = a => {
  var b = M.dc;
  if (b) {
    var c = b.va[a];
    "number" == typeof c && (b.va[a] = c = M.getUniformLocation(b, b.Rb[a] + (0 < c ? `[${c}]` : "")));
    return c;
  }
  N ||= 1282;
}, af = [], bf = [];
function Q(a) {
  return qb.get(a);
}
function R() {
  n.apply(null, Array.from(arguments));
}
function cf() {
  sa.apply(null, Array.from(arguments));
}
function df(a, b) {
  C(a, b, "*");
}
function ef(a, b, c) {
  const d = a.BYTES_PER_ELEMENT;
  return a.subarray(b / d, b / d + c);
}
function ff(a, b, c) {
  const d = a.BYTES_PER_ELEMENT;
  return a.slice(b / d, b / d + c);
}
function gf(a, b) {
  const c = [];
  ef(w, a, b).forEach(function(d) {
    c.push(D(d));
  });
  return c;
}
function S(a) {
  const b = Db(a) + 1, c = We(b);
  md(a, c, b);
  return c;
}
function hf(a) {
  const b = a.length, c = We(4 * b);
  for (let d = 0; d < b; d++) {
    w[(c >> 2) + d] = S(a[d]);
  }
  return c;
}
function jf(a, b) {
  for (let c = 0; c < b; c++) {
    T(w[(a >> 2) + c]);
  }
  T(a);
}
var U = null, kf = "en", lf = 2, mf = !1, nf = !1, of = null, pf = null, qf = !1, rf = !1, sf = [];
function tf() {
  sf.forEach(function(a) {
    try {
      zc(a);
    } catch (b) {
      cf("Already unmounted", b);
    }
    qf && J.Y[a] && (J.Y[a].close(), delete J.Y[a]);
  });
  sf = [];
  rf = qf = !1;
}
function uf() {
  if (rf) {
    return R("Already syncing!"), Promise.resolve();
  }
  rf = !0;
  return new Promise(function(a) {
    xc(!1, function(b) {
      b && R(`Failed to save IDB file system: ${b.message}`);
      rf = !1;
      a(b);
    });
  });
}
function vf(a, b) {
  const c = a.lastIndexOf("/");
  let d = "/";
  0 < c && (d = a.slice(0, c));
  try {
    Ub(d);
  } catch (e) {
    44 !== e.g && R(e), Vb(d);
  }
  Wb(a, new Uint8Array(b));
}
function wf() {
}
var xf = [], yf = null;
function zf(a) {
  yf.then(function() {
    const b = [];
    xf.forEach(function(c) {
      b.push(new Promise(c));
    });
    return Promise.all(b);
  }).then(function() {
    return uf();
  }).then(function() {
    setTimeout(function() {
      a();
    }, 0);
  });
}
function Af(a) {
  if (null == a.X) {
    throw Error("couldn't duplicate a null audioBuffer");
  }
  const b = Array(a.X.numberOfChannels);
  for (var c = 0; c < a.X.numberOfChannels; c++) {
    const d = new Float32Array(a.X.getChannelData(c));
    b[c] = d;
  }
  a = V.createBuffer(a.numberOfChannels, a.X.length, a.X.sampleRate);
  for (c = 0; c < b.length; c++) {
    a.copyToChannel(b[c], c, 0);
  }
  return a;
}
var Cf = class {
  static ha(a) {
    if (!Bf.has(a)) {
      throw Error(`Could not find sample "${a}"`);
    }
    return Bf.get(a);
  }
  static create(a, b = {}) {
    b = new Cf(a, b);
    Bf.set(a.id, b);
    return b;
  }
  static clear(a) {
    Bf.delete(a);
  }
  constructor(a, b = {}) {
    this.id = a.id;
    this.X = null;
    this.numberOfChannels = b.numberOfChannels ?? 2;
    this.sampleRate = b.sampleRate ?? 44100;
    this.qa = b.qa ?? "disabled";
    this.Ib = b.Ib ?? 0;
    this.loopEnd = b.loopEnd ?? 0;
    this.X = a.cb;
  }
  clear() {
    this.cb = null;
    Cf.clear(this.id);
  }
}, Bf;
function Df(a, b) {
  if (8 !== b.length) {
    throw Error(`Volume length isn't "${8}", is ${b.length} instead`);
  }
  a.xa.gain.value = b[0] ?? 0;
  a.za.gain.value = b[1] ?? 0;
  a.Aa.gain.value = b[7] ?? 0;
  a.Ba.gain.value = b[8] ?? 0;
  a.wa.gain.value = b[3] ?? 0;
  a.ya.gain.value = b[4] ?? 0;
}
var Ef = class {
  static create(a) {
    return new Ef(a);
  }
  constructor(a) {
    this.wb = a;
    this.P = V.createChannelSplitter(6);
    this.xa = V.createGain();
    this.za = V.createGain();
    this.Aa = V.createGain();
    this.Ba = V.createGain();
    this.wa = V.createGain();
    this.ya = V.createGain();
    this.I = V.createChannelMerger(6);
    this.P.connect(this.xa, 0).connect(this.I, 0, 0);
    this.P.connect(this.za, 1).connect(this.I, 0, 1);
    this.P.connect(this.Aa, 2).connect(this.I, 0, 2);
    this.P.connect(this.Ba, 3).connect(this.I, 0, 3);
    this.P.connect(this.wa, 4).connect(this.I, 0, 4);
    this.P.connect(this.ya, 0).connect(this.I, 0, 5);
    this.I.connect(this.wb.Ia());
  }
  Ia() {
    return this.P;
  }
  ga() {
    return this.I;
  }
  clear() {
    this.wb = null;
    this.P.disconnect();
    this.P = null;
    this.xa.disconnect();
    this.xa = null;
    this.za.disconnect();
    this.za = null;
    this.Aa.disconnect();
    this.Aa = null;
    this.Ba.disconnect();
    this.Ba = null;
    this.wa.disconnect();
    this.wa = null;
    this.ya.disconnect();
    this.ya = null;
    this.I.disconnect();
    this.I = null;
  }
};
function Ff(a) {
  if (!Gf.has(a)) {
    throw Error(`Could not find sample node "${a}"`);
  }
  return Gf.get(a);
}
function Hf(a) {
  a = Gf.get(a) ?? null;
  null != a && a.stop();
}
function If(a, b) {
  a.B.loop = "forward" === b;
}
function Jf(a, b) {
  if (!a.ea.has(b)) {
    const c = Ef.create(b);
    a.ea.set(b, c);
    a.B.connect(c.Ia());
  }
  return a.ea.get(b);
}
function Kf(a, b, c) {
  for (let d = 0; d < b.length; d++) {
    Df(Jf(a, b[d]), c.slice(8 * d, 8 * d + 8));
  }
}
var Lf = class {
  static create(a, b = {}) {
    b = new Lf(a, b);
    Gf.set(a.id, b);
    return b;
  }
  static clear(a) {
    Bf.delete(a);
  }
  constructor(a, b = {}) {
    this.id = a.id;
    this.tb = a.tb;
    this.offset = b.offset ?? 0;
    this.Ob = b.Ob ?? "none";
    this.startTime = b.startTime ?? 0;
    this.mb = 0;
    this.G = 44100;
    this.ea = new Map();
    this.B = V.createBufferSource();
    this.G = b.playbackRate ?? 44100;
    this.B.playbackRate.value = 1 * this.G;
    If(this, b.qa ?? this.ha().qa ?? "disabled");
    this.B.buffer = Af(this.ha());
    const c = this;
    this.B.addEventListener("ended", () => {
      switch(c.ha().qa) {
        case "none":
          Hf(c.id);
      }
    });
    a = Mf.get(a.$b);
    Df(Jf(this, a), b.volume);
  }
  ha() {
    return Cf.ha(this.tb);
  }
  ga() {
    return this.B;
  }
  start() {
    this.B.start(this.offset);
  }
  stop() {
    this.B.stop();
    this.clear();
  }
  pause(a = !0) {
    a ? (this.mb = (V.currentTime - this.startTime) / this.playbackRate, this.B.stop()) : 0 !== this.mb && (this.B.buffer = this.ha().cb, this.B.connect(this.Tc), this.B.start(this.offset + this.mb));
  }
  connect(a) {
    return this.ga().connect(a);
  }
  clear() {
    this.B.stop();
    this.B.disconnect();
    this.B = null;
    for (const [, a] of this.ea) {
      a.clear();
    }
    this.ea.clear();
    this.ea = null;
    Lf.clear(this.id);
  }
}, Gf;
function Nf(a, b) {
  const c = Mf.get(a);
  let d = Of;
  d = d.filter((e, f) => f !== a);
  d.splice(b - 1, 0, c);
  Of = d;
}
function Pf(a, b) {
  if (null == b) {
    if (0 == Of.indexOf(a)) {
      a.ga().connect(V.destination);
      return;
    }
    throw Error(`Cannot send to "${b}" without the bus being at index 0 (current index: ${Of.indexOf(a)})`);
  }
  a.connect(b);
}
function Qf(a) {
  a.jb = !1;
  Rf = null;
  a.na.gain.value = 1;
  const b = Of.filter(c => c !== a);
  for (let c = 0; c < b.length; c++) {
    b[c].na.gain.value = 1;
  }
}
function Sf(a) {
  a.jb = !0;
  Rf = a;
  a.na.gain.value = 1;
  const b = Of.filter(c => c !== a);
  for (let c = 0; c < b.length; c++) {
    b[c].na.gain.value = 0;
  }
}
var Mf = class {
  static get(a) {
    if (0 > a || a >= Of.length) {
      throw Error(`invalid bus index "${a}"`);
    }
    return Of[a];
  }
  static create() {
    const a = new Mf(), b = 0 === Of.length;
    Of.push(a);
    b ? Pf(a, null) : Pf(a, Mf.get(0));
    return a;
  }
  constructor() {
    this.jb = !1;
    this.xb = V.createGain();
    this.na = V.createGain();
    this.bb = V.createGain();
    this.xb.connect(this.na).connect(this.bb);
  }
  Ia() {
    return this.xb;
  }
  ga() {
    return this.bb;
  }
  connect(a) {
    if (null == a) {
      throw Error("cannot connect to null bus");
    }
    this.ga().disconnect();
    this.ga().connect(a.Ia());
    return a;
  }
  clear() {
    Of = Of.filter(a => a !== this);
  }
}, Of, Rf, V = null, Tf = null, Uf = null, Vf = 0;
function Wf(a, b, c) {
  Bf = new Map();
  Gf = new Map();
  Of = [];
  Rf = null;
  const d = {};
  a && (d.sampleRate = a);
  const e = new (window.AudioContext || window.webkitAudioContext)(d);
  V = e;
  e.onstatechange = function() {
    let f = 0;
    switch(e.state) {
      case "suspended":
        f = 0;
        break;
      case "running":
        f = 1;
        break;
      case "closed":
        f = 2;
    }
    b(f);
  };
  e.onstatechange();
  Vf = setInterval(function() {
    let f = 0;
    e.baseLatency && (f += V.baseLatency);
    e.outputLatency && (f += V.outputLatency);
    c(f);
  }, 1000);
  xf.push(Xf);
  return e.destination.channelCount;
}
function Yf(a) {
  function b(c) {
    try {
      Tf = V.createMediaStreamSource(c), a(Tf);
    } catch (d) {
      R("Failed creating input.", d);
    }
  }
  if (Tf) {
    return 0;
  }
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({audio:!0,}).then(b, function(c) {
      R("Error getting user media.", c);
    });
  } else {
    navigator.getUserMedia || (navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.G);
    if (!navigator.getUserMedia) {
      return R("getUserMedia not available."), 1;
    }
    navigator.getUserMedia({audio:!0,}, b, function(c) {
      cf(c);
    });
  }
  return 0;
}
function Xf(a) {
  const b = V;
  V = null;
  if (b) {
    Vf && (clearInterval(Vf), Vf = 0);
    Tf && (Tf.disconnect(), Tf = null);
    var c = Promise.resolve();
    Uf && (c = Uf.close());
    c.then(function() {
      return b.close();
    }).then(function() {
      b.onstatechange = null;
      a();
    }).catch(function(d) {
      b.onstatechange = null;
      R("Error closing AudioContext", d);
      a();
    });
  } else {
    a();
  }
}
function Zf(a, b, c) {
  a = Ff(a);
  b = b.map(d => Mf.get(d));
  Kf(a, b, c);
}
var $f = {}, W = {promise:null, O:null, qb:null, create:function(a) {
  const b = l.locateFile("godot.audio.worklet.js");
  W.promise = V.audioWorklet.addModule(b).then(function() {
    W.O = new AudioWorkletNode(V, "godot-processor", {outputChannelCount:[a],});
    return Promise.resolve();
  });
  Uf = W;
}, start:function(a, b, c) {
  W.promise.then(function() {
    const d = W.O;
    d.connect(V.destination);
    d.port.postMessage({fb:"start", data:[c, a, b],});
    d.port.onmessage = function(e) {
      R(e.data);
    };
  });
}, Hc:function(a, b, c, d, e, f) {
  W.qb = new function() {
    let g = 0, h = 0, k = 0;
    const m = new Float32Array(b);
    this.Bc = function(r) {
      const x = ef(B, d, e), z = h;
      let q = r.length, y = 0;
      h + q >= e && (y = e - h, x.set(r.subarray(0, y), h), q -= y, h = 0);
      q && x.set(r.subarray(y, q), h);
      f(z, r.length);
      h += q;
    };
    this.bc = function(r) {
      var x = W.O.port;
      k += r;
      if (0 !== k) {
        r = ef(B, a, b);
        var z = r.length, q = k;
        c(g, k);
        if (g + k >= z) {
          const y = z - g;
          m.set(r.subarray(g, z));
          k -= y;
          g = 0;
        }
        0 < k && m.set(r.subarray(g, g + k), q - k);
        x.postMessage({fb:"chunk", data:m.subarray(0, q)});
        g += k;
        k = 0;
      }
    };
  }();
  W.promise.then(function() {
    const g = W.O, h = ff(B, a, b);
    g.connect(V.destination);
    g.port.postMessage({fb:"start_nothreads", data:[h, e],});
    g.port.onmessage = function(k) {
      W.O && ("read" === k.data.cmd ? W.qb.bc(k.data.data) : "input" === k.data.cmd ? (k = k.data.data, k.length > e ? R("Input chunk is too big") : W.qb.Bc(k)) : R(k.data));
    };
  });
}, mc:function() {
  return W.O;
}, close:function() {
  return new Promise(function(a) {
    null !== W.promise && W.promise.then(function() {
      W.O.port.postMessage({fb:"stop", data:null,});
      W.O.disconnect();
      W.O.port.onmessage = null;
      W.O = null;
      W.promise = null;
      a();
    }).catch(function(b) {
      R(b);
    });
  });
},}, ag = "default", bg = !0, cg = {};
function dg(a) {
  let b = ag = a;
  a in cg && (a = cg[a], b = `url("${a.url}") ${a.x} ${a.y}, default`);
  bg && (U.style.cursor = b);
}
function eg() {
  U.style.cursor = "";
  ag = "default";
  bg = !0;
  Object.keys(cg).forEach(function(a) {
    URL.revokeObjectURL(cg[a]);
    delete cg[a];
  });
}
var fg = [];
function gg(a, b, c, d) {
  return -1 !== fg.findIndex(function(e) {
    return e.target === a && e.event === b && e.method === c && e.capture === d;
  });
}
function X(a, b, c, d) {
  gg(a, b, c, d) || (fg.push(new function(e, f, g, h) {
    this.target = e;
    this.event = f;
    this.method = g;
    this.capture = h;
  }(a, b, c, d)), a.addEventListener(b, c, d));
}
function hg() {
  fg.forEach(function(a) {
    a.target.removeEventListener(a.event, a.method, a.capture);
  });
  fg.length = 0;
}
var ig = [0, 0], jg = !0;
function kg() {
  const a = document.fullscreenElement || document.pd || document.webkitFullscreenElement || document.msFullscreenElement;
  return a ? a === U : document.G || document.mozFullScreen || document.qd;
}
function lg() {
  if (!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled)) {
    return 1;
  }
  const a = U;
  try {
    const b = (a.requestFullscreen || a.msRequestFullscreen || a.mozRequestFullScreen || a.td || a.webkitRequestFullscreen).call(a);
    b && b.catch(function() {
    });
  } catch (b) {
    return 1;
  }
  return 0;
}
function mg() {
  if (!kg()) {
    return 0;
  }
  try {
    const a = document.exitFullscreen();
    a && a.catch(function() {
    });
  } catch (a) {
    return 1;
  }
  return 0;
}
function ng() {
  const a = Rd[O ? O.handle : 0];
  a && $d(a);
}
function og() {
  var a = kg();
  const b = 2 === lf, c = U;
  let d = ig[0], e = ig[1];
  if (0 === lf) {
    return c.width !== d || c.height !== e ? (ig = [c.width, c.height], ng(), 1) : 0;
  }
  var f = jg ? window.devicePixelRatio || 1 : 1;
  if (a || b) {
    d = window.innerWidth * f, e = window.innerHeight * f;
  }
  a = `${d / f}px`;
  f = `${e / f}px`;
  return c.style.width !== a || c.style.height !== f || c.width !== d || c.height !== e ? (c.width = d, c.height = e, c.style.width = a, c.style.height = f, ng(), 1) : 0;
}
var pg = null, qg = null;
function sg(a) {
  function b(c) {
    const d = document.createElement(c);
    d.style.display = "none";
    d.style.position = "absolute";
    d.style.zIndex = "-1";
    d.style.background = "transparent";
    d.style.padding = "0px";
    d.style.margin = "0px";
    d.style.overflow = "hidden";
    d.style.width = "0px";
    d.style.height = "0px";
    d.style.border = "0px";
    d.style.outline = "none";
    d.Pb = !0;
    d.disabled = !0;
    X(d, "input", function() {
      const e = S(d.value);
      a(e, d.selectionEnd);
      T(e);
    }, !1);
    X(d, "blur", function() {
      d.style.display = "none";
      d.Pb = !0;
      d.disabled = !0;
    }, !1);
    U.insertAdjacentElement("beforebegin", d);
    return d;
  }
  pg = b("input");
  qg = b("textarea");
  tg();
}
function ug() {
  pg && qg && [pg, qg].forEach(function(a) {
    a.blur();
    a.style.display = "none";
    a.value = "";
  });
}
function tg() {
  function a(c) {
    c.style.left = `${b.left}px`;
    c.style.top = `${b.top}px`;
    c.style.width = `${b.width}px`;
    c.style.height = `${b.height}px`;
  }
  if (pg && qg) {
    var b = U.getBoundingClientRect();
    a(pg);
    a(qg);
  }
}
var vg = "", wg = 0, Y = {};
function xg(a) {
  const b = ++wg;
  Y[b] = a;
  return b;
}
function yg(a) {
  delete Y[a];
}
function zg(a, b) {
  if (a = Y[a]) {
    b.value && a.eb.push(b.value), a.ob = !1, a.done = b.done;
  }
}
function Ag(a, b) {
  if (a = Y[a]) {
    var c = !1;
    b.headers.forEach(function(d, e) {
      d = d.toLowerCase().trim();
      "transfer-encoding" === e.toLowerCase().trim() && "chunked" === d && (c = !0);
    });
    a.status = b.status;
    a.response = b;
    a.ta = b.body.getReader();
    a.ac = c;
  }
}
function Bg(a, b) {
  R(b);
  if (a = Y[a]) {
    a.error = b;
  }
}
function Cg(a, b, c, d) {
  const e = {request:null, response:null, ta:null, error:null, done:!1, ob:!1, status:0, eb:[],}, f = xg(e);
  e.request = fetch(b, {method:a, headers:c, body:d,});
  e.request.then(Ag.bind(null, f)).catch(Bg.bind(null, f));
  return f;
}
function Dg(a) {
  const b = Y[a];
  b && (yg(a), b.request && b.request.then(function(c) {
    c.abort();
  }).catch(function() {
  }));
}
var Eg = [];
function Fg() {
  try {
    const a = navigator.getGamepads();
    return a ? a : [];
  } catch (a) {
    return [];
  }
}
function Gg(a) {
  function b(d) {
    if (d.mapping) {
      var e = d.mapping;
    } else {
      var f = navigator.userAgent;
      e = "Unknown";
      0 <= f.indexOf("Android") ? e = "Android" : 0 <= f.indexOf("Linux") ? e = "Linux" : 0 <= f.indexOf("iPhone") ? e = "iOS" : 0 <= f.indexOf("Macintosh") ? e = "MacOSX" : 0 <= f.indexOf("Windows") && (e = "Windows");
      var g = d.id, h = /vendor: ([0-9a-f]{4}) product: ([0-9a-f]{4})/i, k = /^([0-9a-f]+)-([0-9a-f]+)-/i, m = f = "";
      h.test(g) ? (g = h.exec(g), f = g[1].padStart(4, "0"), m = g[2].padStart(4, "0")) : k.test(g) && (g = k.exec(g), f = g[1].padStart(4, "0"), m = g[2].padStart(4, "0"));
      e = f && m ? e + f + m : `${e}Unknown`;
    }
    f = e;
    e = S(d.id);
    f = S(f);
    a(d.index, 1, e, f);
    T(e);
    T(f);
  }
  Eg = [];
  const c = Fg();
  for (let d = 0; d < c.length; d++) {
    c[d] && b(c[d]);
  }
  X(window, "gamepadconnected", function(d) {
    d.gamepad && b(d.gamepad);
  }, !1);
  X(window, "gamepaddisconnected", function(d) {
    d.gamepad && a(d.gamepad.index, 0);
  }, !1);
}
var Hg = [], Ig = [];
function Jg(a) {
  a.isDirectory ? Kg(a) : a.isFile ? Lg(a) : R("Unrecognized entry...", a);
}
function Kg(a) {
  Hg.push(new Promise(function(b) {
    a.createReader().readEntries(function(c) {
      for (let d = 0; d < c.length; d++) {
        Jg(c[d]);
      }
      b();
    });
  }));
}
function Lg(a) {
  Hg.push(new Promise(function(b, c) {
    a.file(function(d) {
      const e = new FileReader();
      e.onload = function() {
        const f = {path:d.Cd || d.webkitRelativePath, name:d.name, type:d.type, size:d.size, data:e.result,};
        f.path || (f.path = f.name);
        Ig.push(f);
        b();
      };
      e.onerror = function() {
        cf("Error reading file");
        c();
      };
      e.readAsArrayBuffer(d);
    }, function() {
      cf("Error!");
      c();
    });
  }));
}
function Mg(a, b) {
  0 === Hg.length ? a() : Hg.pop().then(function() {
    setTimeout(function() {
      Mg(a, b);
    }, 0);
  });
}
function Ng(a, b) {
  a.preventDefault();
  if (a.dataTransfer.items) {
    for (let c = 0; c < a.dataTransfer.items.length; c++) {
      const d = a.dataTransfer.items[c];
      let e = null;
      "getAsEntry" in d ? e = d.nd() : "webkitGetAsEntry" in d && (e = d.webkitGetAsEntry());
      e && Jg(e);
    }
  } else {
    R("File upload not supported");
  }
  (new Promise(Mg)).then(function() {
    const c = `/tmp/drop-${parseInt(1073741824 * Math.random(), 10)}/`, d = [], e = [];
    Bc(c.slice(0, -1));
    Ig.forEach(f => {
      const g = f.path;
      vf(c + g, f.data);
      f = g.indexOf("/");
      if (-1 === f) {
        d.push(c + g);
      } else {
        const h = g.substr(0, f);
        f = h.indexOf("/");
        0 > f && -1 === d.indexOf(c + h) && d.push(c + h);
      }
      e.push(c + g);
    });
    Hg = [];
    Ig = [];
    b(d);
    nf ? xf.push(function(f) {
      Og(e, c);
      f();
    }) : Og(e, c);
  });
}
function Og(a, b) {
  const c = [b.substr(0, b.length - 1)];
  a.forEach(function(d) {
    Zb(d);
    d = d.replace(b, "");
    let e = d.lastIndexOf("/");
    for (; 0 < e;) {
      d = d.substr(0, e), -1 === c.indexOf(b + d) && c.push(b + d), e = d.lastIndexOf("/");
    }
  });
  c.sort(function(d, e) {
    d = (d.match(/\//g) || []).length;
    e = (e.match(/\//g) || []).length;
    return d > e ? -1 : d < e ? 1 : 0;
  }).forEach(function(d) {
    Yb(d);
  });
}
function Pg(a) {
  return function(b) {
    Ng(b, a);
  };
}
var Qg = null, Rg = !1;
function Sg(a) {
  function b() {
    Rg = !0;
    Qg.focus();
  }
  Qg && (a ? (Qg.style.display = "block", setInterval(b, 100)) : (Qg.style.display = "none", U.focus(), Rg = !1));
}
function Tg(a, b, c, d) {
  function e(h, k) {
    const m = k.shiftKey + 0 + (k.altKey + 0 << 1) + (k.ctrlKey + 0 << 2) + (k.metaKey + 0 << 3);
    Eb(k.code, t, c, 32);
    Eb(k.key, t, d, 32);
    b(h, k.repeat, m);
    k.preventDefault();
  }
  function f(h) {
    Qg && ("compositionstart" === h.type ? (a(0, null), Qg.innerHTML = "") : "compositionupdate" === h.type ? (h = S(h.data), a(1, h), T(h)) : "compositionend" === h.type && (h = S(h.data), a(2, h), T(h), Qg.innerHTML = ""));
  }
  const g = document.createElement("div");
  g.className = "ime";
  g.style.background = "none";
  g.style.opacity = 0.0;
  g.style.position = "fixed";
  g.style.textAlign = "left";
  g.style.fontSize = "1px";
  g.style.left = "0px";
  g.style.top = "0px";
  g.style.width = "100%";
  g.style.height = "40px";
  g.style.display = "none";
  g.contentEditable = "true";
  X(g, "compositionstart", f, !1);
  X(g, "compositionupdate", f, !1);
  X(g, "compositionend", f, !1);
  X(g, "keydown", e.bind(null, 1), !1);
  X(g, "keyup", e.bind(null, 0), !1);
  g.onblur = function() {
    this.style.display = "none";
    U.focus();
    Rg = !1;
  };
  U.parentElement.appendChild(g);
  Qg = g;
}
function Ug(a) {
  return a.shiftKey + 0 + (a.altKey + 0 << 1) + (a.ctrlKey + 0 << 2) + (a.metaKey + 0 << 3);
}
function Vg(a, b) {
  const c = U;
  return [c.width / b.width * (a.clientX - b.x), c.height / b.height * (a.clientY - b.y)];
}
var Wg = !1;
function Xg(a, b) {
  b && b.active && (b.waiting && (Wg = !0, a()), X(b, "updatefound", function() {
    const c = b.installing;
    X(c, "statechange", function() {
      "installed" === c.state && (Wg = !0, a());
    });
  }));
}
function Yg(a, b, c, d, e) {
  if (a = Y[a]) {
    a.binaryType = "arraybuffer", a.onopen = function() {
      b();
    }, a.onclose = function() {
      e();
    }, a.onerror = function() {
      d();
    }, a.onmessage = function(f) {
      let g = 0;
      if (f.data instanceof ArrayBuffer) {
        f = new Uint8Array(f.data);
      } else {
        if (f.data instanceof Blob) {
          R("Blob type not supported");
          return;
        }
        if ("string" === typeof f.data) {
          g = 1;
          var h = new TextEncoder("utf-8");
          f = new Uint8Array(h.encode(f.data));
        } else {
          R("Unknown message type");
          return;
        }
      }
      h = f.length * f.BYTES_PER_ELEMENT;
      const k = We(h);
      v.set(f, k);
      c(k, h, g);
      T(k);
    };
  }
}
function Zg(a) {
  if (a = Y[a]) {
    a.onopen = null, a.onmessage = null, a.onerror = null, a.onclose = null, a.close();
  }
}
function $g(a, b, c) {
  return (a = Y[a]) && void 0 !== a[b] ? a[b] : c;
}
var ah = {Mb:0, dd:1, connected:2, fc:3, ic:4, closed:5,}, bh = {Mb:0, bd:1, connected:2, cd:2, fc:3, ic:4, closed:5,}, ch = {Mb:0, md:1, complete:2,}, dh = {Gd:0, "have-local-offer":1, "have-remote-offer":2, "have-local-pranswer":3, "have-remote-pranswer":4, closed:5,};
function eh(a, b, c, d, e, f) {
  let g = null;
  try {
    g = new RTCPeerConnection(a);
  } catch (k) {
    return R(k), 0;
  }
  const h = xg(g);
  "connectionState" in g && void 0 !== g.connectionState ? g.onconnectionstatechange = function() {
    Y[h] && b(ah[g.connectionState] || 0);
  } : g.oniceconnectionstatechange = function() {
    Y[h] && b(bh[g.iceConnectionState] || 0);
  };
  g.onicegatheringstatechange = function() {
    Y[h] && d(ch[g.iceGatheringState] || 0);
  };
  g.onsignalingstatechange = function() {
    Y[h] && c(dh[g.signalingState] || 0);
  };
  g.onicecandidate = function(k) {
    if (Y[h] && (k = k.candidate) && k.candidate) {
      var m = S(k.candidate), r = S(k.sdpMid);
      e(r, k.sdpMLineIndex, m);
      T(m);
      T(r);
    }
  };
  g.ondatachannel = function(k) {
    Y[h] && (k = xg(k.channel), f(k));
  };
  return h;
}
function fh(a, b, c) {
  Y[a] && (a = S(c.type), c = S(c.sdp), b(a, c), T(a), T(c));
}
function gh(a, b) {
  if (a = Y[a]) {
    a = S(a.protocol), b(a), T(a);
  }
}
function hh(a, b, c) {
  if (Y[a]) {
    a = 0;
    if (c.data instanceof ArrayBuffer) {
      c = new Uint8Array(c.data);
    } else {
      if (c.data instanceof Blob) {
        R("Blob type not supported");
        return;
      }
      if ("string" === typeof c.data) {
        a = 1;
        var d = new TextEncoder("utf-8");
        c = new Uint8Array(d.encode(c.data));
      } else {
        R("Unknown message type");
        return;
      }
    }
    d = c.length * c.BYTES_PER_ELEMENT;
    var e = We(d);
    v.set(c, e);
    b(e, d, a);
    T(e);
  }
}
function ih(a, b) {
  Y[a] && b();
}
function jh(a, b, c) {
  Y[a] && (a = S(c.reason), b(c.code, a, c.wasClean ? 1 : 0), T(a));
}
var kh = null, lh = null;
function mh(a) {
  const b = xg(this);
  kh.set(a, b);
  let c = 1;
  this.Dc = function() {
    c++;
  };
  this.Tb = function() {
    c--;
    0 === c && (yg(b), kh.delete(a));
  };
  this.nc = function() {
    return a;
  };
  this.Hb = function() {
    return b;
  };
}
function nh(a) {
  const b = kh.get(a);
  if (void 0 === b) {
    return (new mh(a)).Hb();
  }
  Y[b].Dc();
  return b;
}
function oh(a) {
  a = Y[a];
  if (void 0 !== a) {
    return a.nc();
  }
}
function ph(a, b) {
  switch(a) {
    case 0:
      return null;
    case 1:
      return !!lb(b, "i64");
    case 2:
      return lb(b, "i64");
    case 3:
      return lb(b, "double");
    case 4:
      return D(lb(b, "*"));
    case 24:
      return oh(lb(b, "i64"));
  }
}
function qh(a, b) {
  if (void 0 === a || null === a) {
    return 0;
  }
  const c = typeof a;
  if ("boolean" === c) {
    return C(b, a, "i64"), 1;
  }
  if ("number" === c) {
    if (Number.isInteger(a)) {
      return C(b, a, "i64"), 2;
    }
    C(b, a, "double");
    return 3;
  }
  if ("string" === c) {
    return a = S(a), C(b, a, "*"), 4;
  }
  a = nh(a);
  C(b, a, "i64");
  return 24;
}
var rh = null, Z = null, sh = null, th = null, uh = null, vh = null, wh = null, xh = 1, yh = [, , , , , , , , , , , , , , , ], zh = [, , , , ], Ah = null, Bh = null, Ch = a => {
  Z && uh ? Z.requestAnimationFrame(function(b, c) {
    vh = c;
    wh = c.getViewerPose(uh);
    a(b);
    wh = vh = null;
  }) : Bh(a);
}, Dh = () => {
  ue();
  qd += 1;
  window.setTimeout(function() {
    p(0 < qd);
    --qd;
    we();
  }, 0);
}, Eh = () => {
  const a = wh ? wh.views.length : 1;
  var b = th;
  if (b && xh === a) {
    return b;
  }
  if (!Z || !sh) {
    return null;
  }
  b = rh;
  b = sh.createProjectionLayer({textureType:1 < a ? "texture-array" : "texture", colorFormat:b.RGBA8, depthFormat:b.DEPTH_COMPONENT24,});
  Z.updateRenderState({layers:[b]});
  th = b;
  xh = a;
  return b;
}, Fh = () => {
  if (!wh) {
    return null;
  }
  const a = Eh();
  return null === a ? null : sh.getViewSubImage(a, wh.views[0]);
}, Gh = a => {
  if (void 0 !== a.name) {
    return a.name;
  }
  const b = Xd(Od);
  a.name = b;
  Od[b] = a;
  return b;
}, Hh = a => {
  let b = -1;
  if ("tracked-pointer" === a.targetRayMode && "left" === a.handedness) {
    b = 0;
  } else if ("tracked-pointer" === a.targetRayMode && "right" === a.handedness) {
    b = 1;
  } else {
    for (var c = 2; 16 > c; c++) {
      if (!yh[c]) {
        b = c;
        break;
      }
    }
  }
  if (0 <= b && (yh[b] = a, a.name = b, "screen" === a.targetRayMode)) {
    c = -1;
    for (let d = 0; 5 > d; d++) {
      if (!zh[d]) {
        c = d;
        break;
      }
    }
    0 <= c && (zh[c] = a, a.Ya = c);
  }
  return b;
}, Ih = a => {
  if (void 0 !== a.name) {
    const b = a.name;
    0 <= b && 16 > b && (yh[b] = null);
    void 0 !== a.Ya && (a = a.Ya, 0 <= a && 5 > a && (zh[a] = null));
    return b;
  }
  return -1;
}, Jh = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Kh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Lh = (a, b) => {
  p(0 <= a.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
  t.set(a, b);
}, Mh = (a, b, c, d) => {
  function e(q, y, u) {
    for (q = "number" == typeof q ? q.toString() : q || ""; q.length < y;) {
      q = u[0] + q;
    }
    return q;
  }
  function f(q, y) {
    return e(q, y, "0");
  }
  function g(q, y) {
    function u(H) {
      return 0 > H ? -1 : 0 < H ? 1 : 0;
    }
    var F;
    0 === (F = u(q.getFullYear() - y.getFullYear())) && 0 === (F = u(q.getMonth() - y.getMonth())) && (F = u(q.getDate() - y.getDate()));
    return F;
  }
  function h(q) {
    switch(q.getDay()) {
      case 0:
        return new Date(q.getFullYear() - 1, 11, 29);
      case 1:
        return q;
      case 2:
        return new Date(q.getFullYear(), 0, 3);
      case 3:
        return new Date(q.getFullYear(), 0, 2);
      case 4:
        return new Date(q.getFullYear(), 0, 1);
      case 5:
        return new Date(q.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(q.getFullYear() - 1, 11, 30);
    }
  }
  function k(q) {
    var y = q.ca;
    for (q = new Date((new Date(q.da + 1900, 0, 1)).getTime()); 0 < y;) {
      var u = q.getMonth(), F = (nd(q.getFullYear()) ? Jh : Kh)[u];
      if (y > F - q.getDate()) {
        y -= F - q.getDate() + 1, q.setDate(1), 11 > u ? q.setMonth(u + 1) : (q.setMonth(0), q.setFullYear(q.getFullYear() + 1));
      } else {
        q.setDate(q.getDate() + y);
        break;
      }
    }
    u = new Date(q.getFullYear() + 1, 0, 4);
    y = h(new Date(q.getFullYear(), 0, 4));
    u = h(u);
    return 0 >= g(y, q) ? 0 >= g(u, q) ? q.getFullYear() + 1 : q.getFullYear() : q.getFullYear() - 1;
  }
  var m = A[d + 40 >> 2];
  d = {Nc:w[d >> 2], Mc:w[d + 4 >> 2], Wa:w[d + 8 >> 2], ub:w[d + 12 >> 2], Xa:w[d + 16 >> 2], da:w[d + 20 >> 2], N:w[d + 24 >> 2], ca:w[d + 28 >> 2], Hd:w[d + 32 >> 2], Lc:w[d + 36 >> 2], Oc:m ? D(m) : ""};
  c = D(c);
  m = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y",};
  for (var r in m) {
    c = c.replace(new RegExp(r, "g"), m[r]);
  }
  var x = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), z = "January February March April May June July August September October November December".split(" ");
  m = {"%a":q => x[q.N].substring(0, 3), "%A":q => x[q.N], "%b":q => z[q.Xa].substring(0, 3), "%B":q => z[q.Xa], "%C":q => f((q.da + 1900) / 100 | 0, 2), "%d":q => f(q.ub, 2), "%e":q => e(q.ub, 2, " "), "%g":q => k(q).toString().substring(2), "%G":k, "%H":q => f(q.Wa, 2), "%I":q => {
    q = q.Wa;
    0 == q ? q = 12 : 12 < q && (q -= 12);
    return f(q, 2);
  }, "%j":q => {
    for (var y = 0, u = 0; u <= q.Xa - 1; y += (nd(q.da + 1900) ? Jh : Kh)[u++]) {
    }
    return f(q.ub + y, 3);
  }, "%m":q => f(q.Xa + 1, 2), "%M":q => f(q.Mc, 2), "%n":() => "\n", "%p":q => 0 <= q.Wa && 12 > q.Wa ? "AM" : "PM", "%S":q => f(q.Nc, 2), "%t":() => "\t", "%u":q => q.N || 7, "%U":q => f(Math.floor((q.ca + 7 - q.N) / 7), 2), "%V":q => {
    var y = Math.floor((q.ca + 7 - (q.N + 6) % 7) / 7);
    2 >= (q.N + 371 - q.ca - 2) % 7 && y++;
    if (y) {
      53 == y && (u = (q.N + 371 - q.ca) % 7, 4 == u || 3 == u && nd(q.da) || (y = 1));
    } else {
      y = 52;
      var u = (q.N + 7 - q.ca - 1) % 7;
      (4 == u || 5 == u && nd(q.da % 400 - 1)) && y++;
    }
    return f(y, 2);
  }, "%w":q => q.N, "%W":q => f(Math.floor((q.ca + 7 - (q.N + 6) % 7) / 7), 2), "%y":q => (q.da + 1900).toString().substring(2), "%Y":q => q.da + 1900, "%z":q => {
    q = q.Lc;
    var y = 0 <= q;
    q = Math.abs(q) / 60;
    return (y ? "+" : "-") + String("0000" + (q / 60 * 100 + q % 60)).slice(-4);
  }, "%Z":q => q.Oc, "%%":() => "%"};
  c = c.replace(/%%/g, "\x00\x00");
  for (r in m) {
    c.includes(r) && (c = c.replace(new RegExp(r, "g"), m[r](d)));
  }
  c = c.replace(/\0\0/g, "%");
  r = Fb(c, !1);
  if (r.length > b) {
    return 0;
  }
  Lh(r, a);
  return r.length - 1;
}, Oh = a => {
  var b = Db(a) + 1, c = Nh(b);
  md(a, c, b);
  return c;
}, Ph = a => {
  var b = l["_" + a];
  p(b, "Cannot call unknown function " + a + ", make sure it is exported");
  return b;
}, Rh = (a, b, c, d) => {
  var e = {string:m => {
    var r = 0;
    null !== m && void 0 !== m && 0 !== m && (r = Oh(m));
    return r;
  }, array:m => {
    var r = Nh(m.length);
    Lh(m, r);
    return r;
  }};
  a = Ph(a);
  var f = [], g = 0;
  p("array" !== b, 'Return type should not be "array".');
  if (d) {
    for (var h = 0; h < d.length; h++) {
      var k = e[c[h]];
      k ? (0 === g && (g = ie()), f[h] = k(d[h])) : f[h] = d[h];
    }
  }
  c = a(...f);
  return c = function(m) {
    0 !== g && Qh(g);
    return "string" === b ? D(m) : "boolean" === b ? !!m : m;
  }(c);
};
[44].forEach(a => {
  Pb[a] = new E(a);
  Pb[a].stack = "<generic error, no stack>";
});
fc = Array(4096);
yc(G, "/");
Bc("/tmp");
Bc("/home");
Bc("/home/web_user");
(function() {
  Bc("/dev");
  Ib(259, {read:() => 0, write:(d, e, f, g) => g,});
  Cc("/dev/null", 259);
  Hb(1280, Kb);
  Hb(1536, Lb);
  Cc("/dev/tty", 1280);
  Cc("/dev/tty1", 1536);
  var a = new Uint8Array(1024), b = 0, c = () => {
    0 === b && (b = xb(a).byteLength);
    return a[--b];
  };
  Mc("random", c);
  Mc("urandom", c);
  Bc("/dev/shm");
  Bc("/dev/shm/tmp");
})();
(function() {
  Bc("/proc");
  var a = Bc("/proc/self");
  Bc("/proc/self/fd");
  yc({v() {
    var b = Ob(a, "fd", 16895, 73);
    b.h = {pa(c, d) {
      var e = tc(+d);
      c = {parent:null, v:{ra:"fake"}, h:{ua:() => e.path},};
      return c.parent = c;
    }};
    return b;
  }}, "/proc/self/fd");
})();
l.requestFullscreen = function(a, b) {
  function c() {
    xe = !1;
    var f = d.parentNode;
    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = Ge, Ee && d.requestPointerLock(), xe = !0, Fe ? ("undefined" != typeof SDL && (w[SDL.screen >> 2] = A[SDL.screen >> 2] | 8388608), Ke(l.canvas), Je()) : Ke(d)) : (f.parentNode.insertBefore(d, f), f.parentNode.removeChild(f), Fe ? ("undefined" != typeof SDL && (w[SDL.screen >> 2] = A[SDL.screen >> 
    2] & -8388609), Ke(l.canvas), Je()) : Ke(d));
    l.onFullScreen?.(xe);
    l.onFullscreen?.(xe);
  }
  Ee = a;
  Fe = b;
  "undefined" == typeof Ee && (Ee = !0);
  "undefined" == typeof Fe && (Fe = !1);
  var d = l.canvas;
  De || (De = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
  var e = document.createElement("div");
  d.parentNode.insertBefore(e, d);
  e.appendChild(d);
  e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? () => e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ? () => e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
  e.requestFullscreen();
};
l.requestFullScreen = function() {
  fa("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
};
l.requestAnimationFrame = Ad;
l.setCanvasSize = function(a, b, c) {
  Ke(l.canvas, a, b);
  c || Je();
};
l.pauseMainLoop = ue;
l.resumeMainLoop = we;
l.getUserMedia = function(a) {
  let b;
  (b = window).getUserMedia || (b.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.getUserMedia(a);
};
l.createContext = function(a, b, c, d) {
  if (b && l.Da && a == l.canvas) {
    return l.Da;
  }
  var e;
  if (b) {
    var f = {antialias:!1, alpha:!1, kb:"undefined" != typeof WebGL2RenderingContext ? 2 : 1,};
    if (d) {
      for (var g in d) {
        f[g] = d[g];
      }
    }
    if ("undefined" != typeof de && (e = ae(a, f))) {
      var h = Rd[e].A;
    }
  } else {
    h = a.getContext("2d");
  }
  if (!h) {
    return null;
  }
  c && (b || p("undefined" == typeof M, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), l.Da = h, b && ce(e), l.Jd = b, ze.forEach(k => k()), Ae());
  return h;
};
for (var M, Sh = 0; 32 > Sh; ++Sh) {
  Te.push(Array(Sh));
}
var Th = new Int32Array(288);
for (Sh = 0; 288 > Sh; ++Sh) {
  af[Sh] = Th.subarray(0, Sh);
}
var Uh = new Float32Array(288);
for (Sh = 0; 288 > Sh; ++Sh) {
  bf[Sh] = Uh.subarray(0, Sh);
}
l.request_quit = function() {
  wf();
};
l.onExit = function(a) {
  const b = pf;
  tf();
  U = null;
  kf = "en";
  lf = 2;
  nf = mf = !1;
  pf = of = null;
  b && b(a);
};
yf = Promise.resolve();
l.initConfig = function(a) {
  lf = a.canvasResizePolicy;
  U = a.canvas;
  kf = a.locale || kf;
  mf = a.virtualKeyboard;
  nf = !!a.persistentDrops;
  of = a.onExecute;
  pf = a.onExit;
  a.focusCanvas && U.focus();
};
l.initFS = function(a) {
  qf = !1;
  if (!Array.isArray(a)) {
    return Promise.reject(Error("Persistent paths must be an array"));
  }
  if (!a.length) {
    return Promise.resolve();
  }
  sf = a.slice();
  sf.forEach(function(b) {
    try {
      Ub(b);
    } catch (c) {
      44 !== c.g && R(c), Vb(b);
    }
    yc(J, b);
  });
  return new Promise(function(b) {
    xc(!0, function(c) {
      c ? (sf = [], qf = !1, cf(`IndexedDB not available: ${c.message}`)) : qf = !0;
      b(c);
    });
  });
};
l.copyToFS = vf;
xf.push(function(a) {
  eg();
  a();
});
xf.push(function(a) {
  hg();
  a();
});
xf.push(function(a) {
  pg && (pg.remove(), pg = null);
  qg && (qg.remove(), qg = null);
  a();
});
xf.push(function(a) {
  Qg && (Qg.remove(), Qg = null);
  a();
});
kh = new Map();
var gi = {__assert_fail:(a, b, c, d) => {
  fa(`Assertion failed: ${D(a)}, at: ` + [b ? D(b) : "unknown filename", c, d ? D(d) : "unknown function"]);
}, __call_sighandler:(a, b) => rb(a)(b), __syscall__newselect:function(a, b, c, d, e) {
  try {
    p(64 >= a, "nfds must be less than or equal to 64");
    for (var f = 0, g = b ? w[b >> 2] : 0, h = b ? w[b + 4 >> 2] : 0, k = c ? w[c >> 2] : 0, m = c ? w[c + 4 >> 2] : 0, r = d ? w[d >> 2] : 0, x = d ? w[d + 4 >> 2] : 0, z = 0, q = 0, y = 0, u = 0, F = 0, H = 0, qa = (b ? w[b >> 2] : 0) | (c ? w[c >> 2] : 0) | (d ? w[d >> 2] : 0), ua = (b ? w[b + 4 >> 2] : 0) | (c ? w[c + 4 >> 2] : 0) | (d ? w[d + 4 >> 2] : 0), da = 0; da < a; da++) {
      var aa = 1 << da % 32;
      if (32 > da ? qa & aa : ua & aa) {
        var Bb = tc(da), gd = 5;
        if (Bb.j.ia) {
          var rg = -1;
          e && (rg = 1000 * ((b ? w[e >> 2] : 0) + (b ? w[e + 4 >> 2] : 0) / 1000000));
          gd = Bb.j.ia(Bb, rg);
        }
        gd & 1 && (32 > da ? g & aa : h & aa) && (32 > da ? z |= aa : q |= aa, f++);
        gd & 4 && (32 > da ? k & aa : m & aa) && (32 > da ? y |= aa : u |= aa, f++);
        gd & 2 && (32 > da ? r & aa : x & aa) && (32 > da ? F |= aa : H |= aa, f++);
      }
    }
    b && (w[b >> 2] = z, w[b + 4 >> 2] = q);
    c && (w[c >> 2] = y, w[c + 4 >> 2] = u);
    d && (w[d >> 2] = F, w[d + 4 >> 2] = H);
    return f;
  } catch (ve) {
    if ("undefined" == typeof L || "ErrnoError" !== ve.name) {
      throw ve;
    }
    return -ve.g;
  }
}, __syscall_accept4:function(a, b, c) {
  try {
    var d = Wc(a), e = d.la.accept(d);
    if (b) {
      var f = $c(b, e.family, dd(e.R), e.S, c);
      p(!f);
    }
    return e.stream.o;
  } catch (g) {
    if ("undefined" == typeof L || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.g;
  }
}, __syscall_bind:function(a, b, c) {
  try {
    var d = Wc(a), e = kd(b, c);
    d.la.bind(d, e.s, e.port);
    return 0;
  } catch (f) {
    if ("undefined" == typeof L || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.g;
  }
}, __syscall_chdir:function(a) {
  try {
    a = D(a);
    var b = K(a, {V:!0});
    if (null === b.node) {
      throw new E(44);
    }
    if (!I(b.node.mode)) {
      throw new E(54);
    }
    var c = pc(b.node, "x");
    if (c) {
      throw new E(c);
    }
    yb = b.path;
    return 0;
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.g;
  }
}, __syscall_chmod:function(a, b) {
  try {
    return a = D(a), Xb(a, b), 0;
  } catch (c) {
    if ("undefined" == typeof L || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.g;
  }
}, __syscall_connect:function(a, b, c) {
  try {
    var d = Wc(a), e = kd(b, c);
    d.la.connect(d, e.s, e.port);
    return 0;
  } catch (f) {
    if ("undefined" == typeof L || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.g;
  }
}, __syscall_faccessat:function(a, b, c, d) {
  try {
    b = D(b);
    p(0 === d);
    b = Oc(a, b);
    if (c & -8) {
      return -28;
    }
    var e = K(b, {V:!0}).node;
    if (!e) {
      return -44;
    }
    a = "";
    c & 4 && (a += "r");
    c & 2 && (a += "w");
    c & 1 && (a += "x");
    return a && pc(e, a) ? -2 : 0;
  } catch (f) {
    if ("undefined" == typeof L || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.g;
  }
}, __syscall_fchmod:function(a, b) {
  try {
    var c = tc(a);
    Xb(c.node, b);
    return 0;
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.g;
  }
}, __syscall_fcntl64:function(a, b, c) {
  Qc = c;
  try {
    var d = tc(a);
    switch(b) {
      case 0:
        var e = ld();
        if (0 > e) {
          break;
        }
        for (; dc[e];) {
          e++;
        }
        return vc(d, e).o;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return e = ld(), d.flags |= e, 0;
      case 12:
        return e = ld(), za[e + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (f) {
    if ("undefined" == typeof L || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.g;
  }
}, __syscall_fstat64:function(a, b) {
  try {
    var c = tc(a);
    return Pc(Ub, c.path, b);
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.g;
  }
}, __syscall_ftruncate64:function(a, b) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    var c = tc(a);
    if (0 === (c.flags & 2097155)) {
      throw new E(28);
    }
    Fc(c.node, b);
    return 0;
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.g;
  }
}, __syscall_getcwd:function(a, b) {
  try {
    if (0 === b) {
      return -28;
    }
    var c = yb, d = Db(c) + 1;
    if (b < d) {
      return -68;
    }
    md(c, a, b);
    return d;
  } catch (e) {
    if ("undefined" == typeof L || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.g;
  }
}, __syscall_getdents64:function(a, b, c) {
  try {
    var d = tc(a);
    d.Z || (d.Z = Tb(d.path));
    a = 0;
    for (var e = Jc(d, 0, 1), f = Math.floor(e / 280); f < d.Z.length && a + 280 <= c;) {
      var g = d.Z[f];
      if ("." === g) {
        var h = d.node.id;
        var k = 4;
      } else if (".." === g) {
        h = K(d.path, {parent:!0}).node.id, k = 4;
      } else {
        var m = Qb(d.node, g);
        h = m.id;
        k = 8192 === (m.mode & 61440) ? 2 : I(m.mode) ? 4 : 40960 === (m.mode & 61440) ? 10 : 8;
      }
      p(h);
      Ba[b + a >> 3] = BigInt(h);
      Ba[b + a + 8 >> 3] = BigInt(280 * (f + 1));
      za[b + a + 16 >> 1] = 280;
      t[b + a + 18] = k;
      md(g, b + a + 19, 256);
      a += 280;
      f += 1;
    }
    Jc(d, 280 * f, 0);
    return a;
  } catch (r) {
    if ("undefined" == typeof L || "ErrnoError" !== r.name) {
      throw r;
    }
    return -r.g;
  }
}, __syscall_getsockname:function(a, b, c) {
  try {
    var d = Wc(a), e = $c(b, d.family, dd(d.rb || "0.0.0.0"), d.ma, c);
    p(!e);
    return 0;
  } catch (f) {
    if ("undefined" == typeof L || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.g;
  }
}, __syscall_getsockopt:function(a, b, c, d, e) {
  try {
    var f = Wc(a);
    return 1 === b && 4 === c ? (w[d >> 2] = f.error, w[e >> 2] = 4, f.error = null, 0) : -50;
  } catch (g) {
    if ("undefined" == typeof L || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.g;
  }
}, __syscall_ioctl:function(a, b, c) {
  Qc = c;
  try {
    var d = tc(a);
    switch(b) {
      case 21509:
        return d.m ? 0 : -59;
      case 21505:
        if (!d.m) {
          return -59;
        }
        if (d.m.T.sc) {
          a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
          var e = ld();
          w[e >> 2] = 25856;
          w[e + 4 >> 2] = 5;
          w[e + 8 >> 2] = 191;
          w[e + 12 >> 2] = 35387;
          for (var f = 0; 32 > f; f++) {
            t[e + f + 17] = a[f] || 0;
          }
        }
        return 0;
      case 21510:
      case 21511:
      case 21512:
        return d.m ? 0 : -59;
      case 21506:
      case 21507:
      case 21508:
        if (!d.m) {
          return -59;
        }
        if (d.m.T.tc) {
          for (e = ld(), a = [], f = 0; 32 > f; f++) {
            a.push(t[e + f + 17]);
          }
        }
        return 0;
      case 21519:
        if (!d.m) {
          return -59;
        }
        e = ld();
        return w[e >> 2] = 0;
      case 21520:
        return d.m ? -28 : -59;
      case 21531:
        e = ld();
        if (!d.j.Ja) {
          throw new E(59);
        }
        return d.j.Ja(d, b, e);
      case 21523:
        if (!d.m) {
          return -59;
        }
        d.m.T.uc && (f = [24, 80], e = ld(), za[e >> 1] = f[0], za[e + 2 >> 1] = f[1]);
        return 0;
      case 21524:
        return d.m ? 0 : -59;
      case 21515:
        return d.m ? 0 : -59;
      default:
        return -28;
    }
  } catch (g) {
    if ("undefined" == typeof L || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.g;
  }
}, __syscall_listen:function(a) {
  try {
    Wc(a);
    if (!ja) {
      throw new E(138);
    }
    return 0;
  } catch (b) {
    if ("undefined" == typeof L || "ErrnoError" !== b.name) {
      throw b;
    }
    return -b.g;
  }
}, __syscall_lstat64:function(a, b) {
  try {
    return a = D(a), Pc(Ec, a, b);
  } catch (c) {
    if ("undefined" == typeof L || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.g;
  }
}, __syscall_mkdirat:function(a, b, c) {
  try {
    return b = D(b), b = Oc(a, b), b = tb(b), "/" === b[b.length - 1] && (b = b.substr(0, b.length - 1)), Bc(b, c), 0;
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.g;
  }
}, __syscall_mknodat:function(a, b, c, d) {
  try {
    b = D(b);
    b = Oc(a, b);
    switch(c & 61440) {
      case 32768:
      case 8192:
      case 24576:
      case 4096:
      case 49152:
        break;
      default:
        return -28;
    }
    Ac(b, c, d);
    return 0;
  } catch (e) {
    if ("undefined" == typeof L || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.g;
  }
}, __syscall_newfstatat:function(a, b, c, d) {
  try {
    b = D(b);
    var e = d & 256, f = d & 4096;
    d &= -6401;
    p(!d, `unknown flags in __syscall_newfstatat: ${d}`);
    b = Oc(a, b, f);
    return Pc(e ? Ec : Ub, b, c);
  } catch (g) {
    if ("undefined" == typeof L || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.g;
  }
}, __syscall_openat:function(a, b, c, d) {
  Qc = d;
  try {
    b = D(b);
    b = Oc(a, b);
    var e = d ? ld() : 0;
    return Gc(b, c, e).o;
  } catch (f) {
    if ("undefined" == typeof L || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.g;
  }
}, __syscall_poll:function(a, b) {
  try {
    for (var c = 0, d = 0; d < b; d++) {
      var e = a + 8 * d, f = za[e + 4 >> 1], g = 32, h = dc[w[e >> 2]];
      h && (g = 5, h.j.ia && (g = h.j.ia(h, -1)));
      (g &= f | 24) && c++;
      za[e + 6 >> 1] = g;
    }
    return c;
  } catch (k) {
    if ("undefined" == typeof L || "ErrnoError" !== k.name) {
      throw k;
    }
    return -k.g;
  }
}, __syscall_readlinkat:function(a, b, c, d) {
  try {
    b = D(b);
    b = Oc(a, b);
    if (0 >= d) {
      return -28;
    }
    var e = kc(b), f = Math.min(d, Db(e)), g = t[c + f];
    md(e, c, d + 1);
    t[c + f] = g;
    return f;
  } catch (h) {
    if ("undefined" == typeof L || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.g;
  }
}, __syscall_recvfrom:function(a, b, c, d, e, f) {
  try {
    var g = Wc(a), h = Rc(g, c);
    if (!h) {
      return 0;
    }
    if (e) {
      var k = $c(e, g.family, dd(h.s), h.port, f);
      p(!k);
    }
    v.set(h.buffer, b);
    return h.buffer.byteLength;
  } catch (m) {
    if ("undefined" == typeof L || "ErrnoError" !== m.name) {
      throw m;
    }
    return -m.g;
  }
}, __syscall_renameat:function(a, b, c, d) {
  try {
    b = D(b);
    d = D(d);
    b = Oc(a, b);
    d = Oc(c, d);
    a = b;
    var e = ub(a), f = ub(d), g = vb(a), h = vb(d);
    var k = K(a, {parent:!0});
    var m = k.node;
    k = K(d, {parent:!0});
    var r = k.node;
    if (!m || !r) {
      throw new E(44);
    }
    if (m.v !== r.v) {
      throw new E(75);
    }
    var x = Qb(m, g), z = Ab(a, f);
    if ("." !== z.charAt(0)) {
      throw new E(28);
    }
    z = Ab(d, e);
    if ("." !== z.charAt(0)) {
      throw new E(55);
    }
    try {
      var q = Qb(r, h);
    } catch (F) {
    }
    if (x !== q) {
      var y = I(x.mode), u = sc(m, g, y);
      if (u) {
        throw new E(u);
      }
      if (u = q ? sc(r, h, y) : rc(r, h)) {
        throw new E(u);
      }
      if (!m.h.Sa) {
        throw new E(63);
      }
      if (x.H || q && q.H) {
        throw new E(10);
      }
      if (r !== m && (u = pc(m, "w"))) {
        throw new E(u);
      }
      oc(x);
      try {
        m.h.Sa(x, r, h);
      } catch (F) {
        throw F;
      } finally {
        nc(x);
      }
    }
    return 0;
  } catch (F) {
    if ("undefined" == typeof L || "ErrnoError" !== F.name) {
      throw F;
    }
    return -F.g;
  }
}, __syscall_rmdir:function(a) {
  try {
    return a = D(a), Yb(a), 0;
  } catch (b) {
    if ("undefined" == typeof L || "ErrnoError" !== b.name) {
      throw b;
    }
    return -b.g;
  }
}, __syscall_sendto:function(a, b, c, d, e, f) {
  try {
    var g = Wc(a), h = kd(e, f, !0);
    return h ? Sc(g, t, b, c, h.s, h.port) : Kc(g.stream, t, b, c);
  } catch (k) {
    if ("undefined" == typeof L || "ErrnoError" !== k.name) {
      throw k;
    }
    return -k.g;
  }
}, __syscall_socket:function(a, b, c) {
  try {
    b &= -526337;
    if (1 == b && c && 6 != c) {
      throw new E(66);
    }
    var d = {family:a, type:b, protocol:c, M:null, error:null, L:{}, pending:[], ja:[], la:Vc.Rc}, e = Vc.Qa(), f = Ob(Vc.root, e, 49152, 0);
    f.ka = d;
    var g = uc({path:e, node:f, flags:2, seekable:!1, j:Vc.j});
    d.stream = g;
    p(64 > d.stream.o);
    return d.stream.o;
  } catch (h) {
    if ("undefined" == typeof L || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.g;
  }
}, __syscall_stat64:function(a, b) {
  try {
    return a = D(a), Pc(Ub, a, b);
  } catch (c) {
    if ("undefined" == typeof L || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.g;
  }
}, __syscall_statfs64:function(a, b, c) {
  try {
    return D(a), p(64 === b), w[c + 4 >> 2] = 4096, w[c + 40 >> 2] = 4096, w[c + 8 >> 2] = 1000000, w[c + 12 >> 2] = 500000, w[c + 16 >> 2] = 500000, w[c + 20 >> 2] = ec, w[c + 24 >> 2] = 1000000, w[c + 28 >> 2] = 42, w[c + 44 >> 2] = 2, w[c + 36 >> 2] = 255, 0;
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.g;
  }
}, __syscall_symlink:function(a, b) {
  try {
    return a = D(a), b = D(b), Dc(a, b), 0;
  } catch (c) {
    if ("undefined" == typeof L || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.g;
  }
}, __syscall_unlinkat:function(a, b, c) {
  try {
    return b = D(b), b = Oc(a, b), 0 === c ? Zb(b) : 512 === c ? Yb(b) : fa("Invalid flags passed to unlinkat"), 0;
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.g;
  }
}, _abort_js:() => {
  fa("native code called abort()");
}, _emscripten_get_now_is_monotonic:() => 1, _emscripten_runtime_keepalive_clear:() => {
  mb = !1;
  qd = 0;
}, _emscripten_throw_longjmp:() => {
  throw Infinity;
}, _gmtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  w[b >> 2] = a.getUTCSeconds();
  w[b + 4 >> 2] = a.getUTCMinutes();
  w[b + 8 >> 2] = a.getUTCHours();
  w[b + 12 >> 2] = a.getUTCDate();
  w[b + 16 >> 2] = a.getUTCMonth();
  w[b + 20 >> 2] = a.getUTCFullYear() - 1900;
  w[b + 24 >> 2] = a.getUTCDay();
  w[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
}, _localtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  w[b >> 2] = a.getSeconds();
  w[b + 4 >> 2] = a.getMinutes();
  w[b + 8 >> 2] = a.getHours();
  w[b + 12 >> 2] = a.getDate();
  w[b + 16 >> 2] = a.getMonth();
  w[b + 20 >> 2] = a.getFullYear() - 1900;
  w[b + 24 >> 2] = a.getDay();
  w[b + 28 >> 2] = (nd(a.getFullYear()) ? od : pd)[a.getMonth()] + a.getDate() - 1 | 0;
  w[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
  var c = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset(), d = (new Date(a.getFullYear(), 0, 1)).getTimezoneOffset();
  w[b + 32 >> 2] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
}, _tzset_js:(a, b, c, d) => {
  var e = (new Date()).getFullYear(), f = new Date(e, 0, 1), g = new Date(e, 6, 1);
  e = f.getTimezoneOffset();
  var h = g.getTimezoneOffset();
  A[a >> 2] = 60 * Math.max(e, h);
  w[b >> 2] = Number(e != h);
  a = k => k.toLocaleTimeString(void 0, {hour12:!1, timeZoneName:"short"}).split(" ")[1];
  f = a(f);
  g = a(g);
  p(f);
  p(g);
  p(16 >= Db(f), `timezone name truncated to fit in TZNAME_MAX (${f})`);
  p(16 >= Db(g), `timezone name truncated to fit in TZNAME_MAX (${g})`);
  h < e ? (md(f, c, 17), md(g, d, 17)) : (md(f, d, 17), md(g, c, 17));
}, emscripten_cancel_main_loop:() => {
  ue();
  td = null;
}, emscripten_date_now:() => Date.now(), emscripten_err:a => n(D(a)), emscripten_force_exit:a => {
  mb = !1;
  qd = 0;
  he(a);
}, emscripten_get_heap_max:() => 2147483648, emscripten_get_now:xd, emscripten_resize_heap:a => {
  var b = v.length;
  a >>>= 0;
  p(a > b);
  if (2147483648 < a) {
    return n(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${2147483648} bytes!`), !1;
  }
  for (var c = 1; 4 >= c; c *= 2) {
    var d = b * (1 + 0.2 / c);
    d = Math.min(d, a + 100663296);
    var e = Math;
    d = Math.max(a, d);
    e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536);
    a: {
      d = e;
      var f = wa.buffer, g = (d - f.byteLength + 65535) / 65536;
      try {
        wa.grow(g);
        Da();
        var h = 1;
        break a;
      } catch (k) {
        n(`growMemory: Attempted to grow heap from ${f.byteLength} bytes to ${d} bytes, but got error: ${k}`);
      }
      h = void 0;
    }
    if (h) {
      return !0;
    }
  }
  n(`Failed to grow the heap from ${b} bytes to ${e} bytes, not enough memory!`);
  return !1;
}, emscripten_set_canvas_element_size:(a, b, c) => {
  a = Oe(a);
  if (!a) {
    return -4;
  }
  a.width = b;
  a.height = c;
  a.$a && $d(a.$a);
  return 0;
}, emscripten_set_main_loop:(a, b, c) => {
  a = rb(a);
  se(a, b, c);
}, emscripten_webgl_commit_frame:() => O && O.A ? O.hb ? (be(), 0) : O.attributes.Fb ? 0 : -3 : -3, emscripten_webgl_create_context:(a, b) => {
  p(b);
  b >>= 2;
  b = {alpha:!!w[b], depth:!!w[b + 1], stencil:!!w[b + 2], antialias:!!w[b + 3], premultipliedAlpha:!!w[b + 4], preserveDrawingBuffer:!!w[b + 5], powerPreference:Pe[w[b + 6]], failIfMajorPerformanceCaveat:!!w[b + 7], kb:w[b + 8], sd:w[b + 9], Eb:w[b + 10], Fb:w[b + 11], zd:w[b + 12], Ta:w[b + 13]};
  a = Oe(a);
  if (!a) {
    return 0;
  }
  b.Fb && !b.Ta && (b.Ta = !0);
  return ae(a, b);
}, emscripten_webgl_destroy_context:a => {
  O == a && (O = 0);
  O === Rd[a] && (O = null);
  if ("object" == typeof Me) {
    for (var b = Rd[a].A.canvas, c = 0; c < Le.length; ++c) {
      if (Le[c].target == b) {
        var d = c--, e = Le[d];
        e.target.removeEventListener(e.jd, e.hd, e.Id);
        Le.splice(d, 1);
      }
    }
  }
  Rd[a] && Rd[a].A.canvas && (Rd[a].A.canvas.$a = void 0);
  Rd[a] = null;
}, emscripten_webgl_enable_extension:(a, b) => {
  a = Rd[a];
  b = D(b);
  b.startsWith("GL_") && (b = b.substr(3));
  "ANGLE_instanced_arrays" == b && Dd(M);
  "OES_vertex_array_object" == b && Ed(M);
  "WEBGL_draw_buffers" == b && Fd(M);
  "WEBGL_draw_instanced_base_vertex_base_instance" == b && Gd(M);
  "WEBGL_multi_draw_instanced_base_vertex_base_instance" == b && Hd(M);
  "WEBGL_multi_draw" == b && (M.xc = M.getExtension("WEBGL_multi_draw"));
  return !!a.A.getExtension(b);
}, emscripten_webgl_make_context_current:a => ce(a) ? 0 : -5, environ_get:(a, b) => {
  var c = 0;
  Se().forEach((d, e) => {
    var f = b + c;
    e = A[a + 4 * e >> 2] = f;
    for (f = 0; f < d.length; ++f) {
      p(d.charCodeAt(f) === (d.charCodeAt(f) & 255)), t[e++] = d.charCodeAt(f);
    }
    t[e] = 0;
    c += d.length + 1;
  });
  return 0;
}, environ_sizes_get:(a, b) => {
  var c = Se();
  A[a >> 2] = c.length;
  var d = 0;
  c.forEach(e => d += e.length + 1);
  A[b >> 2] = d;
  return 0;
}, exit:he, fd_close:function(a) {
  try {
    var b = tc(a);
    Ic(b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof L || "ErrnoError" !== c.name) {
      throw c;
    }
    return c.g;
  }
}, fd_fdstat_get:function(a, b) {
  try {
    var c = tc(a);
    t[b] = c.m ? 2 : I(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
    za[b + 2 >> 1] = 0;
    Ba[b + 8 >> 3] = BigInt(0);
    Ba[b + 16 >> 3] = BigInt(0);
    return 0;
  } catch (d) {
    if ("undefined" == typeof L || "ErrnoError" !== d.name) {
      throw d;
    }
    return d.g;
  }
}, fd_read:function(a, b, c, d) {
  try {
    a: {
      var e = tc(a);
      a = b;
      for (var f, g = b = 0; g < c; g++) {
        var h = A[a >> 2], k = A[a + 4 >> 2];
        a += 8;
        var m = e, r = h, x = k, z = f, q = t;
        p(0 <= r);
        if (0 > x || 0 > z) {
          throw new E(28);
        }
        if (null === m.o) {
          throw new E(8);
        }
        if (1 === (m.flags & 2097155)) {
          throw new E(8);
        }
        if (I(m.node.mode)) {
          throw new E(31);
        }
        if (!m.j.read) {
          throw new E(28);
        }
        var y = "undefined" != typeof z;
        if (!y) {
          z = m.position;
        } else if (!m.seekable) {
          throw new E(70);
        }
        var u = m.j.read(m, q, r, x, z);
        y || (m.position += u);
        var F = u;
        if (0 > F) {
          var H = -1;
          break a;
        }
        b += F;
        if (F < k) {
          break;
        }
        "undefined" != typeof f && (f += F);
      }
      H = b;
    }
    A[d >> 2] = H;
    return 0;
  } catch (qa) {
    if ("undefined" == typeof L || "ErrnoError" !== qa.name) {
      throw qa;
    }
    return qa.g;
  }
}, fd_seek:function(a, b, c, d) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    var e = tc(a);
    Jc(e, b, c);
    Ba[d >> 3] = BigInt(e.position);
    e.Z && 0 === b && 0 === c && (e.Z = null);
    return 0;
  } catch (f) {
    if ("undefined" == typeof L || "ErrnoError" !== f.name) {
      throw f;
    }
    return f.g;
  }
}, fd_write:function(a, b, c, d) {
  try {
    a: {
      var e = tc(a);
      a = b;
      for (var f, g = b = 0; g < c; g++) {
        var h = A[a >> 2], k = A[a + 4 >> 2];
        a += 8;
        var m = Kc(e, t, h, k, f);
        if (0 > m) {
          var r = -1;
          break a;
        }
        b += m;
        "undefined" != typeof f && (f += m);
      }
      r = b;
    }
    A[d >> 2] = r;
    return 0;
  } catch (x) {
    if ("undefined" == typeof L || "ErrnoError" !== x.name) {
      throw x;
    }
    return x.g;
  }
}, getaddrinfo:(a, b, c, d) => {
  function e(x, z, q, y, u, F) {
    var H = 10 === x ? 28 : 16;
    u = 10 === x ? hd(u) : ed(u);
    H = We(H);
    u = $c(H, x, u, F);
    p(!u);
    u = We(32);
    w[u + 4 >> 2] = x;
    w[u + 8 >> 2] = z;
    w[u + 12 >> 2] = q;
    A[u + 24 >> 2] = y;
    A[u + 20 >> 2] = H;
    w[u + 16 >> 2] = 10 === x ? 28 : 16;
    w[u + 28 >> 2] = 0;
    return u;
  }
  var f = 0, g = 0, h = 0, k = 0, m = 0, r = 0;
  c && (h = w[c >> 2], k = w[c + 4 >> 2], m = w[c + 8 >> 2], r = w[c + 12 >> 2]);
  m && !r && (r = 2 === m ? 17 : 6);
  !m && r && (m = 17 === r ? 2 : 1);
  0 === r && (r = 6);
  0 === m && (m = 1);
  if (!a && !b) {
    return -2;
  }
  if (h & -1088 || 0 !== c && w[c >> 2] & 2 && !a) {
    return -1;
  }
  if (h & 32) {
    return -2;
  }
  if (0 !== m && 1 !== m && 2 !== m) {
    return -7;
  }
  if (0 !== k && 2 !== k && 10 !== k) {
    return -6;
  }
  if (b && (b = D(b), g = parseInt(b, 10), isNaN(g))) {
    return h & 1024 ? -2 : -8;
  }
  if (!a) {
    return 0 === k && (k = 2), 0 === (h & 1) && (2 === k ? f = Vh(2130706433) : f = [0, 0, 0, 1]), a = e(k, m, r, null, f, g), A[d >> 2] = a, 0;
  }
  a = D(a);
  f = Xc(a);
  if (null !== f) {
    if (0 === k || 2 === k) {
      k = 2;
    } else if (10 === k && h & 8) {
      f = [0, 0, Vh(65535), f], k = 10;
    } else {
      return -2;
    }
  } else {
    if (f = Zc(a), null !== f) {
      if (0 === k || 10 === k) {
        k = 10;
      } else {
        return -2;
      }
    }
  }
  if (null != f) {
    return a = e(k, m, r, a, f, g), A[d >> 2] = a, 0;
  }
  if (h & 4) {
    return -2;
  }
  a = dd(a);
  f = Xc(a);
  0 === k ? k = 2 : 10 === k && (f = [0, 0, Vh(65535), f]);
  a = e(k, m, r, null, f, g);
  A[d >> 2] = a;
  return 0;
}, getnameinfo:(a, b, c, d, e, f, g) => {
  b = jd(a, b);
  if (b.g) {
    return -6;
  }
  a = b.port;
  var h = b.s;
  b = !1;
  if (c && d) {
    var k;
    if (g & 1 || !(k = cd[h] ? cd[h] : null)) {
      if (g & 8) {
        return -2;
      }
    } else {
      h = k;
    }
    c = md(h, c, d);
    c + 1 >= d && (b = !0);
  }
  e && f && (c = md("" + a, e, f), c + 1 >= f && (b = !0));
  return b ? -12 : 0;
}, glActiveTexture:a => M.activeTexture(a), glAttachShader:(a, b) => {
  M.attachShader(Ld[a], Pd[b]);
}, glBeginTransformFeedback:a => M.beginTransformFeedback(a), glBindBuffer:(a, b) => {
  35051 == a ? M.gb = b : 35052 == a && (M.U = b);
  M.bindBuffer(a, Kd[b]);
}, glBindBufferBase:(a, b, c) => {
  M.bindBufferBase(a, b, Kd[c]);
}, glBindBufferRange:(a, b, c, d, e) => {
  M.bindBufferRange(a, b, Kd[c], d, e);
}, glBindFramebuffer:(a, b) => {
  M.bindFramebuffer(a, b ? Md[b] : O.hb);
}, glBindRenderbuffer:(a, b) => {
  M.bindRenderbuffer(a, Nd[b]);
}, glBindTexture:(a, b) => {
  M.bindTexture(a, Od[b]);
}, glBindVertexArray:a => {
  M.bindVertexArray(Qd[a]);
}, glBlendColor:(a, b, c, d) => M.blendColor(a, b, c, d), glBlendEquation:a => M.blendEquation(a), glBlendFunc:(a, b) => M.blendFunc(a, b), glBlendFuncSeparate:(a, b, c, d) => M.blendFuncSeparate(a, b, c, d), glBlitFramebuffer:(a, b, c, d, e, f, g, h, k, m) => M.blitFramebuffer(a, b, c, d, e, f, g, h, k, m), glBufferData:(a, b, c, d) => {
  2 <= O.version ? c && b ? M.bufferData(a, v, d, c, b) : M.bufferData(a, b, d) : M.bufferData(a, c ? v.subarray(c, c + b) : b, d);
}, glBufferSubData:(a, b, c, d) => {
  2 <= O.version ? c && M.bufferSubData(a, b, v, d, c) : M.bufferSubData(a, b, v.subarray(d, d + c));
}, glCheckFramebufferStatus:a => M.checkFramebufferStatus(a), glClear:a => M.clear(a), glClearBufferfv:(a, b, c) => {
  M.clearBufferfv(a, b, B, c >> 2);
}, glClearColor:(a, b, c, d) => M.clearColor(a, b, c, d), glClearDepthf:a => M.clearDepth(a), glColorMask:(a, b, c, d) => {
  M.colorMask(!!a, !!b, !!c, !!d);
}, glCompileShader:a => {
  M.compileShader(Pd[a]);
}, glCompressedTexImage2D:(a, b, c, d, e, f, g, h) => {
  2 <= O.version ? M.U || !g ? M.compressedTexImage2D(a, b, c, d, e, f, g, h) : M.compressedTexImage2D(a, b, c, d, e, f, v, h, g) : M.compressedTexImage2D(a, b, c, d, e, f, h ? v.subarray(h, h + g) : null);
}, glCompressedTexImage3D:(a, b, c, d, e, f, g, h, k) => {
  M.U ? M.compressedTexImage3D(a, b, c, d, e, f, g, h, k) : M.compressedTexImage3D(a, b, c, d, e, f, g, v, k, h);
}, glCompressedTexSubImage3D:(a, b, c, d, e, f, g, h, k, m, r) => {
  M.U ? M.compressedTexSubImage3D(a, b, c, d, e, f, g, h, k, m, r) : M.compressedTexSubImage3D(a, b, c, d, e, f, g, h, k, v, r, m);
}, glCopyBufferSubData:(a, b, c, d, e) => M.copyBufferSubData(a, b, c, d, e), glCreateProgram:() => {
  var a = Xd(Ld), b = M.createProgram();
  b.name = a;
  b.Ma = b.Ka = b.La = 0;
  b.vb = 1;
  Ld[a] = b;
  return a;
}, glCreateShader:a => {
  var b = Xd(Pd);
  Pd[b] = M.createShader(a);
  return b;
}, glCullFace:a => M.cullFace(a), glDeleteBuffers:(a, b) => {
  for (var c = 0; c < a; c++) {
    var d = w[b + 4 * c >> 2], e = Kd[d];
    e && (M.deleteBuffer(e), e.name = 0, Kd[d] = null, d == M.gb && (M.gb = 0), d == M.U && (M.U = 0));
  }
}, glDeleteFramebuffers:(a, b) => {
  for (var c = 0; c < a; ++c) {
    var d = w[b + 4 * c >> 2], e = Md[d];
    e && (M.deleteFramebuffer(e), e.name = 0, Md[d] = null);
  }
}, glDeleteProgram:a => {
  if (a) {
    var b = Ld[a];
    b ? (M.deleteProgram(b), b.name = 0, Ld[a] = null) : N ||= 1281;
  }
}, glDeleteQueries:(a, b) => {
  for (var c = 0; c < a; c++) {
    var d = w[b + 4 * c >> 2], e = Sd[d];
    e && (M.deleteQuery(e), Sd[d] = null);
  }
}, glDeleteRenderbuffers:(a, b) => {
  for (var c = 0; c < a; c++) {
    var d = w[b + 4 * c >> 2], e = Nd[d];
    e && (M.deleteRenderbuffer(e), e.name = 0, Nd[d] = null);
  }
}, glDeleteShader:a => {
  if (a) {
    var b = Pd[a];
    b ? (M.deleteShader(b), Pd[a] = null) : N ||= 1281;
  }
}, glDeleteSync:a => {
  if (a) {
    var b = Td[a];
    b ? (M.deleteSync(b), b.name = 0, Td[a] = null) : N ||= 1281;
  }
}, glDeleteTextures:(a, b) => {
  for (var c = 0; c < a; c++) {
    var d = w[b + 4 * c >> 2], e = Od[d];
    e && (M.deleteTexture(e), e.name = 0, Od[d] = null);
  }
}, glDeleteVertexArrays:(a, b) => {
  for (var c = 0; c < a; c++) {
    var d = w[b + 4 * c >> 2];
    M.deleteVertexArray(Qd[d]);
    Qd[d] = null;
  }
}, glDepthFunc:a => M.depthFunc(a), glDepthMask:a => {
  M.depthMask(!!a);
}, glDisable:a => M.disable(a), glDisableVertexAttribArray:a => {
  M.disableVertexAttribArray(a);
}, glDrawArrays:(a, b, c) => {
  M.drawArrays(a, b, c);
}, glDrawArraysInstanced:(a, b, c, d) => {
  M.drawArraysInstanced(a, b, c, d);
}, glDrawBuffers:(a, b) => {
  for (var c = Te[a], d = 0; d < a; d++) {
    c[d] = w[b + 4 * d >> 2];
  }
  M.drawBuffers(c);
}, glDrawElements:(a, b, c, d) => {
  M.drawElements(a, b, c, d);
}, glDrawElementsInstanced:(a, b, c, d, e) => {
  M.drawElementsInstanced(a, b, c, d, e);
}, glEnable:a => M.enable(a), glEnableVertexAttribArray:a => {
  M.enableVertexAttribArray(a);
}, glEndTransformFeedback:() => M.endTransformFeedback(), glFenceSync:(a, b) => (a = M.fenceSync(a, b)) ? (b = Xd(Td), a.name = b, Td[b] = a, b) : 0, glFinish:() => M.finish(), glFramebufferRenderbuffer:(a, b, c, d) => {
  M.framebufferRenderbuffer(a, b, c, Nd[d]);
}, glFramebufferTexture2D:(a, b, c, d, e) => {
  M.framebufferTexture2D(a, b, c, Od[d], e);
}, glFramebufferTextureLayer:(a, b, c, d, e) => {
  M.framebufferTextureLayer(a, b, Od[c], d, e);
}, glFrontFace:a => M.frontFace(a), glGenBuffers:(a, b) => {
  Yd(a, b, "createBuffer", Kd);
}, glGenFramebuffers:(a, b) => {
  Yd(a, b, "createFramebuffer", Md);
}, glGenQueries:(a, b) => {
  Yd(a, b, "createQuery", Sd);
}, glGenRenderbuffers:(a, b) => {
  Yd(a, b, "createRenderbuffer", Nd);
}, glGenTextures:(a, b) => {
  Yd(a, b, "createTexture", Od);
}, glGenVertexArrays:(a, b) => {
  Yd(a, b, "createVertexArray", Qd);
}, glGenerateMipmap:a => M.generateMipmap(a), glGetFloatv:(a, b) => Ve(a, b, 2), glGetInteger64v:(a, b) => {
  Ve(a, b, 1);
}, glGetIntegerv:(a, b) => Ve(a, b, 0), glGetProgramInfoLog:(a, b, c, d) => {
  a = M.getProgramInfoLog(Ld[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? md(a, d, b) : 0;
  c && (w[c >> 2] = b);
}, glGetProgramiv:(a, b, c) => {
  if (c) {
    if (a >= Jd) {
      N ||= 1281;
    } else {
      if (a = Ld[a], 35716 == b) {
        a = M.getProgramInfoLog(a), null === a && (a = "(unknown error)"), w[c >> 2] = a.length + 1;
      } else if (35719 == b) {
        if (!a.Ma) {
          for (b = 0; b < M.getProgramParameter(a, 35718); ++b) {
            a.Ma = Math.max(a.Ma, M.getActiveUniform(a, b).name.length + 1);
          }
        }
        w[c >> 2] = a.Ma;
      } else if (35722 == b) {
        if (!a.Ka) {
          for (b = 0; b < M.getProgramParameter(a, 35721); ++b) {
            a.Ka = Math.max(a.Ka, M.getActiveAttrib(a, b).name.length + 1);
          }
        }
        w[c >> 2] = a.Ka;
      } else if (35381 == b) {
        if (!a.La) {
          for (b = 0; b < M.getProgramParameter(a, 35382); ++b) {
            a.La = Math.max(a.La, M.getActiveUniformBlockName(a, b).length + 1);
          }
        }
        w[c >> 2] = a.La;
      } else {
        w[c >> 2] = M.getProgramParameter(a, b);
      }
    }
  } else {
    N ||= 1281;
  }
}, glGetShaderInfoLog:(a, b, c, d) => {
  a = M.getShaderInfoLog(Pd[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? md(a, d, b) : 0;
  c && (w[c >> 2] = b);
}, glGetShaderiv:(a, b, c) => {
  c ? 35716 == b ? (a = M.getShaderInfoLog(Pd[a]), null === a && (a = "(unknown error)"), w[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = M.getShaderSource(Pd[a]), w[c >> 2] = a ? a.length + 1 : 0) : w[c >> 2] = M.getShaderParameter(Pd[a], b) : N ||= 1281;
}, glGetString:a => {
  var b = Ud[a];
  if (!b) {
    switch(a) {
      case 7939:
        b = Xe(Ue().join(" "));
        break;
      case 7936:
      case 7937:
      case 37445:
      case 37446:
        (b = M.getParameter(a)) || (N ||= 1280);
        b = b ? Xe(b) : 0;
        break;
      case 7938:
        b = M.getParameter(7938);
        b = 2 <= O.version ? `OpenGL ES 3.0 (${b})` : `OpenGL ES 2.0 (${b})`;
        b = Xe(b);
        break;
      case 35724:
        b = M.getParameter(35724);
        var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
        null !== c && (3 == c[1].length && (c[1] += "0"), b = `OpenGL ES GLSL ES ${c[1]} (${b})`);
        b = Xe(b);
        break;
      default:
        N ||= 1280;
    }
    Ud[a] = b;
  }
  return b;
}, glGetStringi:(a, b) => {
  if (2 > O.version) {
    return N ||= 1282, 0;
  }
  var c = Vd[a];
  if (c) {
    return 0 > b || b >= c.length ? (N ||= 1281, 0) : c[b];
  }
  switch(a) {
    case 7939:
      return c = Ue().map(Xe), c = Vd[a] = c, 0 > b || b >= c.length ? (N ||= 1281, 0) : c[b];
    default:
      return N ||= 1280, 0;
  }
}, glGetSynciv:(a, b, c, d, e) => {
  0 > c ? N ||= 1281 : e ? (a = M.getSyncParameter(Td[a], b), null !== a && (w[e >> 2] = a, d && (w[d >> 2] = 1))) : N ||= 1281;
}, glGetUniformBlockIndex:(a, b) => M.getUniformBlockIndex(Ld[a], D(b)), glGetUniformLocation:(a, b) => {
  b = D(b);
  if (a = Ld[a]) {
    var c = a, d = c.va, e = c.Sb, f;
    if (!d) {
      for (c.va = d = {}, c.Rb = {}, f = 0; f < M.getProgramParameter(c, 35718); ++f) {
        var g = M.getActiveUniform(c, f);
        var h = g.name;
        g = g.size;
        var k = Ye(h);
        k = 0 < k ? h.slice(0, k) : h;
        var m = c.vb;
        c.vb += g;
        e[k] = [g, m];
        for (h = 0; h < g; ++h) {
          d[m] = h, c.Rb[m++] = k;
        }
      }
    }
    c = a.va;
    d = 0;
    e = b;
    f = Ye(b);
    0 < f && (d = parseInt(b.slice(f + 1)) >>> 0, e = b.slice(0, f));
    if ((e = a.Sb[e]) && d < e[0] && (d += e[1], c[d] = c[d] || M.getUniformLocation(a, b))) {
      return d;
    }
  } else {
    N ||= 1281;
  }
  return -1;
}, glLinkProgram:a => {
  a = Ld[a];
  M.linkProgram(a);
  a.va = 0;
  a.Sb = {};
}, glPixelStorei:(a, b) => {
  3317 == a && (Wd = b);
  M.pixelStorei(a, b);
}, glReadBuffer:a => M.readBuffer(a), glReadPixels:(a, b, c, d, e, f, g) => {
  if (2 <= O.version) {
    if (M.gb) {
      M.readPixels(a, b, c, d, e, f, g);
    } else {
      var h = Ze(f);
      g >>>= 31 - Math.clz32(h.BYTES_PER_ELEMENT);
      M.readPixels(a, b, c, d, e, f, h, g);
    }
  } else {
    (h = $e(f, e, c, d, g)) ? M.readPixels(a, b, c, d, e, f, h) : N ||= 1280;
  }
}, glRenderbufferStorage:(a, b, c, d) => M.renderbufferStorage(a, b, c, d), glRenderbufferStorageMultisample:(a, b, c, d, e) => M.renderbufferStorageMultisample(a, b, c, d, e), glScissor:(a, b, c, d) => M.scissor(a, b, c, d), glShaderSource:(a, b, c, d) => {
  for (var e = "", f = 0; f < b; ++f) {
    e += D(A[c + 4 * f >> 2], d ? A[d + 4 * f >> 2] : void 0);
  }
  M.shaderSource(Pd[a], e);
}, glTexImage2D:(a, b, c, d, e, f, g, h, k) => {
  if (2 <= O.version) {
    if (M.U) {
      M.texImage2D(a, b, c, d, e, f, g, h, k);
      return;
    }
    if (k) {
      var m = Ze(h);
      k >>>= 31 - Math.clz32(m.BYTES_PER_ELEMENT);
      M.texImage2D(a, b, c, d, e, f, g, h, m, k);
      return;
    }
  }
  m = k ? $e(h, g, d, e, k) : null;
  M.texImage2D(a, b, c, d, e, f, g, h, m);
}, glTexImage3D:(a, b, c, d, e, f, g, h, k, m) => {
  if (M.U) {
    M.texImage3D(a, b, c, d, e, f, g, h, k, m);
  } else if (m) {
    var r = Ze(k);
    M.texImage3D(a, b, c, d, e, f, g, h, k, r, m >>> 31 - Math.clz32(r.BYTES_PER_ELEMENT));
  } else {
    M.texImage3D(a, b, c, d, e, f, g, h, k, null);
  }
}, glTexParameterf:(a, b, c) => M.texParameterf(a, b, c), glTexParameteri:(a, b, c) => M.texParameteri(a, b, c), glTexStorage2D:(a, b, c, d, e) => M.texStorage2D(a, b, c, d, e), glTexSubImage3D:(a, b, c, d, e, f, g, h, k, m, r) => {
  if (M.U) {
    M.texSubImage3D(a, b, c, d, e, f, g, h, k, m, r);
  } else if (r) {
    var x = Ze(m);
    M.texSubImage3D(a, b, c, d, e, f, g, h, k, m, x, r >>> 31 - Math.clz32(x.BYTES_PER_ELEMENT));
  } else {
    M.texSubImage3D(a, b, c, d, e, f, g, h, k, m, null);
  }
}, glTransformFeedbackVaryings:(a, b, c, d) => {
  a = Ld[a];
  for (var e = [], f = 0; f < b; f++) {
    e.push(D(w[c + 4 * f >> 2]));
  }
  M.transformFeedbackVaryings(a, e, d);
}, glUniform1f:(a, b) => {
  M.uniform1f(P(a), b);
}, glUniform1i:(a, b) => {
  M.uniform1i(P(a), b);
}, glUniform1iv:(a, b, c) => {
  if (2 <= O.version) {
    b && M.uniform1iv(P(a), w, c >> 2, b);
  } else {
    if (288 >= b) {
      for (var d = af[b], e = 0; e < b; ++e) {
        d[e] = w[c + 4 * e >> 2];
      }
    } else {
      d = w.subarray(c >> 2, c + 4 * b >> 2);
    }
    M.uniform1iv(P(a), d);
  }
}, glUniform1ui:(a, b) => {
  M.uniform1ui(P(a), b);
}, glUniform1uiv:(a, b, c) => {
  b && M.uniform1uiv(P(a), A, c >> 2, b);
}, glUniform2f:(a, b, c) => {
  M.uniform2f(P(a), b, c);
}, glUniform2fv:(a, b, c) => {
  if (2 <= O.version) {
    b && M.uniform2fv(P(a), B, c >> 2, 2 * b);
  } else {
    if (144 >= b) {
      for (var d = bf[2 * b], e = 0; e < 2 * b; e += 2) {
        d[e] = B[c + 4 * e >> 2], d[e + 1] = B[c + (4 * e + 4) >> 2];
      }
    } else {
      d = B.subarray(c >> 2, c + 8 * b >> 2);
    }
    M.uniform2fv(P(a), d);
  }
}, glUniform2iv:(a, b, c) => {
  if (2 <= O.version) {
    b && M.uniform2iv(P(a), w, c >> 2, 2 * b);
  } else {
    if (144 >= b) {
      for (var d = af[2 * b], e = 0; e < 2 * b; e += 2) {
        d[e] = w[c + 4 * e >> 2], d[e + 1] = w[c + (4 * e + 4) >> 2];
      }
    } else {
      d = w.subarray(c >> 2, c + 8 * b >> 2);
    }
    M.uniform2iv(P(a), d);
  }
}, glUniform3fv:(a, b, c) => {
  if (2 <= O.version) {
    b && M.uniform3fv(P(a), B, c >> 2, 3 * b);
  } else {
    if (96 >= b) {
      for (var d = bf[3 * b], e = 0; e < 3 * b; e += 3) {
        d[e] = B[c + 4 * e >> 2], d[e + 1] = B[c + (4 * e + 4) >> 2], d[e + 2] = B[c + (4 * e + 8) >> 2];
      }
    } else {
      d = B.subarray(c >> 2, c + 12 * b >> 2);
    }
    M.uniform3fv(P(a), d);
  }
}, glUniform4f:(a, b, c, d, e) => {
  M.uniform4f(P(a), b, c, d, e);
}, glUniform4fv:(a, b, c) => {
  if (2 <= O.version) {
    b && M.uniform4fv(P(a), B, c >> 2, 4 * b);
  } else {
    if (72 >= b) {
      var d = bf[4 * b], e = B;
      c >>= 2;
      for (var f = 0; f < 4 * b; f += 4) {
        var g = c + f;
        d[f] = e[g];
        d[f + 1] = e[g + 1];
        d[f + 2] = e[g + 2];
        d[f + 3] = e[g + 3];
      }
    } else {
      d = B.subarray(c >> 2, c + 16 * b >> 2);
    }
    M.uniform4fv(P(a), d);
  }
}, glUniformBlockBinding:(a, b, c) => {
  a = Ld[a];
  M.uniformBlockBinding(a, b, c);
}, glUniformMatrix3fv:(a, b, c, d) => {
  if (2 <= O.version) {
    b && M.uniformMatrix3fv(P(a), !!c, B, d >> 2, 9 * b);
  } else {
    if (32 >= b) {
      for (var e = bf[9 * b], f = 0; f < 9 * b; f += 9) {
        e[f] = B[d + 4 * f >> 2], e[f + 1] = B[d + (4 * f + 4) >> 2], e[f + 2] = B[d + (4 * f + 8) >> 2], e[f + 3] = B[d + (4 * f + 12) >> 2], e[f + 4] = B[d + (4 * f + 16) >> 2], e[f + 5] = B[d + (4 * f + 20) >> 2], e[f + 6] = B[d + (4 * f + 24) >> 2], e[f + 7] = B[d + (4 * f + 28) >> 2], e[f + 8] = B[d + (4 * f + 32) >> 2];
      }
    } else {
      e = B.subarray(d >> 2, d + 36 * b >> 2);
    }
    M.uniformMatrix3fv(P(a), !!c, e);
  }
}, glUniformMatrix4fv:(a, b, c, d) => {
  if (2 <= O.version) {
    b && M.uniformMatrix4fv(P(a), !!c, B, d >> 2, 16 * b);
  } else {
    if (18 >= b) {
      var e = bf[16 * b], f = B;
      d >>= 2;
      for (var g = 0; g < 16 * b; g += 16) {
        var h = d + g;
        e[g] = f[h];
        e[g + 1] = f[h + 1];
        e[g + 2] = f[h + 2];
        e[g + 3] = f[h + 3];
        e[g + 4] = f[h + 4];
        e[g + 5] = f[h + 5];
        e[g + 6] = f[h + 6];
        e[g + 7] = f[h + 7];
        e[g + 8] = f[h + 8];
        e[g + 9] = f[h + 9];
        e[g + 10] = f[h + 10];
        e[g + 11] = f[h + 11];
        e[g + 12] = f[h + 12];
        e[g + 13] = f[h + 13];
        e[g + 14] = f[h + 14];
        e[g + 15] = f[h + 15];
      }
    } else {
      e = B.subarray(d >> 2, d + 64 * b >> 2);
    }
    M.uniformMatrix4fv(P(a), !!c, e);
  }
}, glUseProgram:a => {
  a = Ld[a];
  M.useProgram(a);
  M.dc = a;
}, glVertexAttrib4f:(a, b, c, d, e) => M.vertexAttrib4f(a, b, c, d, e), glVertexAttribDivisor:(a, b) => {
  M.vertexAttribDivisor(a, b);
}, glVertexAttribI4ui:(a, b, c, d, e) => M.vertexAttribI4ui(a, b, c, d, e), glVertexAttribIPointer:(a, b, c, d, e) => {
  M.vertexAttribIPointer(a, b, c, d, e);
}, glVertexAttribPointer:(a, b, c, d, e, f) => {
  M.vertexAttribPointer(a, b, c, !!d, e, f);
}, glViewport:(a, b, c, d) => M.viewport(a, b, c, d), godot_audio_has_worklet:function() {
  return V && V.audioWorklet ? 1 : 0;
}, godot_audio_init:function(a, b, c, d) {
  b = Q(c);
  d = Q(d);
  c = lb(a, "i32");
  d = Wf(c, b, d);
  C(a, V.sampleRate, "i32");
  return d;
}, godot_audio_input_start:function() {
  return Yf(function(a) {
    a.connect(Uf.mc());
  });
}, godot_audio_input_stop:function() {
  if (Tf) {
    const a = Tf.mediaStream.getTracks();
    for (let b = 0; b < a.length; b++) {
      a[b].stop();
    }
    Tf.disconnect();
    Tf = null;
  }
}, godot_audio_is_available:function() {
  return window.AudioContext || window.webkitAudioContext ? 1 : 0;
}, godot_audio_resume:function() {
  V && "running" !== V.state && V.resume();
}, godot_audio_sample_bus_add:function(a) {
  const b = Mf.create();
  a !== Of.indexOf(b) && Nf(Of.indexOf(b), a);
}, godot_audio_sample_bus_move:function(a, b) {
  Nf(a, b);
}, godot_audio_sample_bus_remove:function(a) {
  Mf.get(a).clear();
}, godot_audio_sample_bus_set_count:function(a) {
  var b = Of;
  if (a !== b.length) {
    if (a < b.length) {
      const c = b.slice(a);
      for (let d = 0; d < c.length; d++) {
        c[d].clear();
      }
      Of = b.slice(0, a);
    } else {
      for (b = Of.length; b < a; b++) {
        Mf.create();
      }
    }
  }
}, godot_audio_sample_bus_set_mute:function(a, b) {
  Mf.get(a).bb.gain.value = b ? 0 : 1;
}, godot_audio_sample_bus_set_send:function(a, b) {
  Pf(Mf.get(a), Mf.get(b));
}, godot_audio_sample_bus_set_solo:function(a, b) {
  a = Mf.get(a);
  a.jb !== b && (b ? (null != Rf && Rf !== a && Qf(Rf), Sf(a)) : Qf(a));
}, godot_audio_sample_bus_set_volume_db:function(a, b) {
  Mf.get(a).Kd = b;
}, godot_audio_sample_is_active:function(a) {
  a = D(a);
  return $f.Fd.has(a);
}, godot_audio_sample_register_stream:function(a, b, c, d, e, f) {
  a = D(a);
  d = D(d);
  const g = V.sampleRate, h = ef(B, b, c);
  b = ef(B, b + 4 * c, c);
  c = V.createBuffer(2, c, g);
  c.copyToChannel(new Float32Array(h), 0, 0);
  c.copyToChannel(new Float32Array(b), 1, 0);
  Cf.create({id:a, cb:c,}, {Ib:e, loopEnd:f, qa:d, numberOfChannels:2, sampleRate:g,});
}, godot_audio_sample_set_pause:function(a, b) {
  a = D(a);
  Ff(a).pause(b);
}, godot_audio_sample_set_volumes_linear:function(a, b, c, d, e) {
  a = D(a);
  b = ef(w, b, c);
  d = ef(B, d, e);
  Zf(a, Array.from(b), d);
}, godot_audio_sample_start:function(a, b, c, d, e, f) {
  a = D(a);
  b = D(b);
  f = D(f);
  e = ef(B, e, 8);
  d = {offset:d, volume:e, Ob:f, playbackRate:1,};
  Hf(a);
  Lf.create({$b:c, id:a, tb:b,}, d).start();
}, godot_audio_sample_stop:function(a) {
  a = D(a);
  Hf(a);
}, godot_audio_sample_stream_is_registered:function(a) {
  return null != (Bf.get(a) ?? null);
}, godot_audio_sample_unregister_stream:function(a) {
  a = D(a);
  Cf.clear(a);
}, godot_audio_sample_update_pitch_scale:function(a, b) {
  a = D(a);
  Ff(a).xd = b;
}, godot_audio_worklet_create:function(a) {
  try {
    W.create(a);
  } catch (b) {
    return R("Error starting AudioDriverWorklet", b), 1;
  }
  return 0;
}, godot_audio_worklet_start_no_threads:function(a, b, c, d, e, f) {
  c = Q(c);
  f = Q(f);
  W.Hc(a, b, c, d, e, f);
}, godot_js_config_canvas_id_get:function(a, b) {
  Eb(`#${U.id}`, t, a, b);
}, godot_js_config_locale_get:function(a, b) {
  Eb(kf, t, a, b);
}, godot_js_display_alert:function(a) {
  window.alert(D(a));
}, godot_js_display_canvas_focus:function() {
  U.focus();
}, godot_js_display_canvas_is_focused:function() {
  return document.activeElement === U;
}, godot_js_display_clipboard_get:function(a) {
  const b = Q(a);
  try {
    navigator.clipboard.readText().then(function(c) {
      c = S(c);
      b(c);
      T(c);
    }).catch(function() {
    });
  } catch (c) {
  }
}, godot_js_display_clipboard_set:function(a) {
  a = D(a);
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    return 1;
  }
  navigator.clipboard.writeText(a).catch(function(b) {
    R("Setting OS clipboard is only possible from an input callback for the Web platform. Exception:", b);
  });
  return 0;
}, godot_js_display_cursor_is_hidden:function() {
  return !bg;
}, godot_js_display_cursor_is_locked:function() {
  return document.pointerLockElement === U ? 1 : 0;
}, godot_js_display_cursor_lock_set:function(a) {
  a ? (a = U, a.requestPointerLock && a.requestPointerLock()) : document.exitPointerLock && document.exitPointerLock();
}, godot_js_display_cursor_set_custom_shape:function(a, b, c, d, e) {
  a = D(a);
  const f = cg[a];
  0 < c ? (b = URL.createObjectURL(new Blob([ff(v, b, c)], {type:"image/png"})), cg[a] = {url:b, x:d, y:e,}) : delete cg[a];
  a === ag && dg(ag);
  f && URL.revokeObjectURL(f.url);
}, godot_js_display_cursor_set_shape:function(a) {
  dg(D(a));
}, godot_js_display_cursor_set_visible:function(a) {
  a = 0 !== a;
  a !== bg && ((bg = a) ? dg(ag) : U.style.cursor = "none");
}, godot_js_display_desired_size_set:function(a, b) {
  ig = [a, b];
  og();
}, godot_js_display_fullscreen_cb:function(a) {
  function b(e) {
    e.target === c && d(kg());
  }
  const c = U, d = Q(a);
  X(document, "fullscreenchange", b, !1);
  X(document, "mozfullscreenchange", b, !1);
  X(document, "webkitfullscreenchange", b, !1);
}, godot_js_display_fullscreen_exit:function() {
  return mg();
}, godot_js_display_fullscreen_request:function() {
  return lg();
}, godot_js_display_has_webgl:function(a) {
  if (1 !== a && 2 !== a) {
    return !1;
  }
  try {
    return !!document.createElement("canvas").getContext(2 === a ? "webgl2" : "webgl");
  } catch (b) {
  }
  return !1;
}, godot_js_display_is_swap_ok_cancel:function() {
  return -1 !== ["Windows", "Win64", "Win32", "WinCE"].indexOf(navigator.platform || "") ? 1 : 0;
}, godot_js_display_notification_cb:function(a, b, c, d, e) {
  const f = U, g = Q(a), h = [b, c, d, e];
  ["mouseover", "mouseleave", "focus", "blur"].forEach(function(k, m) {
    X(f, k, function() {
      g(h[m]);
    }, !0);
  });
}, godot_js_display_pixel_ratio_get:function() {
  return jg ? window.devicePixelRatio || 1 : 1;
}, godot_js_display_screen_dpi_get:function() {
  const a = Math.round(96 * window.devicePixelRatio);
  return 96 <= a ? a : 96;
}, godot_js_display_screen_size_get:function(a, b) {
  const c = jg ? window.devicePixelRatio || 1 : 1;
  C(a, window.screen.width * c, "i32");
  C(b, window.screen.height * c, "i32");
}, godot_js_display_setup_canvas:function(a, b, c, d) {
  const e = U;
  X(e, "contextmenu", function(f) {
    f.preventDefault();
  }, !1);
  X(e, "webglcontextlost", function(f) {
    alert("WebGL context lost, please reload the page");
    f.preventDefault();
  }, !1);
  jg = !!d;
  switch(lf) {
    case 0:
      ig = [e.width, e.height];
      break;
    case 1:
      ig = [a, b];
      break;
    default:
      e.style.position = "absolute", e.style.top = 0, e.style.left = 0;
  }
  og();
  c && lg();
}, godot_js_display_size_update:function() {
  const a = og();
  a && tg();
  return a;
}, godot_js_display_touchscreen_is_available:function() {
  return "ontouchstart" in window;
}, godot_js_display_tts_available:function() {
  return "speechSynthesis" in window;
}, godot_js_display_vk_available:function() {
  return mf && "ontouchstart" in window;
}, godot_js_display_vk_cb:function(a) {
  a = Q(a);
  mf && "ontouchstart" in window && sg(a);
}, godot_js_display_vk_hide:function() {
  ug();
}, godot_js_display_vk_show:function(a, b, c, d) {
  a = D(a);
  c = 0 < c ? c : 0;
  d = 0 < d ? d : c;
  if (pg && qg) {
    "" === pg.style.display && "" === qg.style.display || ug();
    tg();
    var e = pg;
    switch(b) {
      case 0:
        e.type = "text";
        e.$ = "";
        break;
      case 1:
        e = qg;
        break;
      case 2:
        e.type = "text";
        e.$ = "numeric";
        break;
      case 3:
        e.type = "text";
        e.$ = "decimal";
        break;
      case 4:
        e.type = "tel";
        e.$ = "";
        break;
      case 5:
        e.type = "email";
        e.$ = "";
        break;
      case 6:
        e.type = "password";
        e.$ = "";
        break;
      case 7:
        e.type = "url";
        e.$ = "";
        break;
      default:
        e.type = "text", e.$ = "";
    }
    e.Pb = !1;
    e.disabled = !1;
    e.value = a;
    e.style.display = "block";
    e.focus();
    e.setSelectionRange(c, d);
  }
}, godot_js_display_window_blur_cb:function(a) {
  const b = Q(a);
  X(window, "blur", function() {
    b();
  }, !1);
}, godot_js_display_window_icon_set:function(a, b) {
  let c = document.getElementById("-gd-engine-icon");
  const d = vg;
  a ? (null === c && (c = document.createElement("link"), c.rel = "icon", c.id = "-gd-engine-icon", document.head.appendChild(c)), vg = URL.createObjectURL(new Blob([ff(v, a, b)], {type:"image/png"})), c.href = vg) : (c && c.remove(), vg = null);
  d && URL.revokeObjectURL(d);
}, godot_js_display_window_size_get:function(a, b) {
  C(a, U.width, "i32");
  C(b, U.height, "i32");
}, godot_js_display_window_title_set:function(a) {
  document.title = D(a);
}, godot_js_eval:function(a, b, c, d, e, f) {
  b = D(a);
  a = null;
  try {
    a = (0,eval)(b);
  } catch (g) {
    R(g);
  }
  switch(typeof a) {
    case "boolean":
      return C(c, a, "i32"), 1;
    case "number":
      return C(c, a, "double"), 3;
    case "string":
      return df(c, S(a)), 4;
    case "object":
      if (null !== a && (!ArrayBuffer.isView(a) || a instanceof Uint8Array ? a instanceof ArrayBuffer && (a = new Uint8Array(a)) : a = new Uint8Array(a.buffer), a instanceof Uint8Array)) {
        return c = Q(f)(d, e, a.length), v.set(a, c), 29;
      }
  }
  return 0;
}, godot_js_fetch_create:function(a, b, c, d, e, f) {
  a = D(a);
  b = D(b);
  c = gf(c, d);
  e = f ? ff(t, e, f) : null;
  return Cg(a, b, c.map(function(g) {
    const h = g.indexOf(":");
    return 0 >= h ? [] : [g.slice(0, h).trim(), g.slice(h + 1).trim(),];
  }).filter(function(g) {
    return 2 === g.length;
  }), e);
}, godot_js_fetch_free:function(a) {
  Dg(a);
}, godot_js_fetch_http_status_get:function(a) {
  return (a = Y[a]) && a.response ? a.status : 0;
}, godot_js_fetch_is_chunked:function(a) {
  return (a = Y[a]) && a.response ? a.ac ? 1 : 0 : -1;
}, godot_js_fetch_read_chunk:function(a, b, c) {
  const d = Y[a];
  if (!d || !d.response) {
    return 0;
  }
  let e = c;
  const f = d.eb;
  for (; e && f.length;) {
    const h = d.eb[0];
    if (h.length > e) {
      var g = h.slice(0, e);
      t.set(g, b / g.BYTES_PER_ELEMENT);
      f[0] = h.slice(e);
      e = 0;
    } else {
      t.set(h, b / h.BYTES_PER_ELEMENT), e -= h.length, f.pop();
    }
  }
  f.length || (b = Y[a]) && b.ta && !b.ob && (b.done ? b.ta = null : (b.ob = !0, b.ta.read().then(zg.bind(null, a)).catch(Bg.bind(null, a))));
  return c - e;
}, godot_js_fetch_read_headers:function(a, b, c) {
  a = Y[a];
  if (!a || !a.response) {
    return 1;
  }
  b = Q(b);
  const d = [];
  a.response.headers.forEach(function(e, f) {
    d.push(`${f}:${e}`);
  });
  a = hf(d);
  b(d.length, a, c);
  jf(a, d.length);
  return 0;
}, godot_js_fetch_state_get:function(a) {
  a = Y[a];
  return !a || a.error ? -1 : a.response ? a.ta ? 1 : a.done ? 2 : -1 : 0;
}, godot_js_input_drop_files_cb:function(a) {
  const b = Q(a);
  a = U;
  X(a, "dragover", function(c) {
    c.preventDefault();
  }, !1);
  X(a, "drop", Pg(function(c) {
    var d = c || [];
    d.length && (c = d.length, d = hf(d), b(d, c), jf(d, c));
  }));
}, godot_js_input_gamepad_cb:function(a) {
  a = Q(a);
  Gg(a);
}, godot_js_input_gamepad_sample:function() {
  const a = Fg(), b = [];
  for (let d = 0; d < a.length; d++) {
    const e = a[d];
    if (!e) {
      b.push(null);
      continue;
    }
    const f = {Gc:"standard" === e.mapping, buttons:[], axes:[], connected:e.connected,};
    for (var c = 0; c < e.buttons.length; c++) {
      f.buttons.push(e.buttons[c].value);
    }
    for (c = 0; c < e.axes.length; c++) {
      f.axes.push(e.axes[c]);
    }
    b.push(f);
  }
  Eg = b;
  return 0;
}, godot_js_input_gamepad_sample_count:function() {
  return Eg.length;
}, godot_js_input_gamepad_sample_get:function(a, b, c, d, e, f) {
  var g = Eg;
  a = a < g.length ? g[a] : null;
  if (!a || !a.connected) {
    return 1;
  }
  g = a.buttons;
  const h = 16 > g.length ? g.length : 16;
  for (let k = 0; k < h; k++) {
    C(b + (k << 2), g[k], "float");
  }
  C(c, h, "i32");
  b = a.axes;
  c = 10 > b.length ? b.length : 10;
  for (g = 0; g < c; g++) {
    C(d + (g << 2), b[g], "float");
  }
  C(e, c, "i32");
  C(f, a.Gc ? 1 : 0, "i32");
  return 0;
}, godot_js_input_key_cb:function(a, b, c) {
  function d(f, g) {
    const h = Ug(g);
    Eb(g.code, t, b, 32);
    Eb(g.key, t, c, 32);
    e(f, g.repeat, h);
    g.preventDefault();
  }
  const e = Q(a);
  X(U, "keydown", d.bind(null, 1), !1);
  X(U, "keyup", d.bind(null, 0), !1);
}, godot_js_input_mouse_button_cb:function(a) {
  function b(e, f) {
    var g = d.getBoundingClientRect();
    g = Vg(f, g);
    const h = Ug(f);
    e && U.focus();
    c(e, f.button, g[0], g[1], h) && f.preventDefault();
  }
  const c = Q(a), d = U;
  X(d, "mousedown", b.bind(null, 1), !1);
  X(window, "mouseup", b.bind(null, 0), !1);
}, godot_js_input_mouse_move_cb:function(a) {
  const b = Q(a), c = U;
  X(window, "mousemove", function(d) {
    const e = c.getBoundingClientRect(), f = Vg(d, e);
    b(f[0], f[1], c.width / e.width * d.movementX, c.height / e.height * d.movementY, Ug(d));
  }, !1);
}, godot_js_input_mouse_wheel_cb:function(a) {
  const b = Q(a);
  X(U, "wheel", function(c) {
    b(c.deltaX || 0, c.deltaY || 0) && c.preventDefault();
  }, !1);
}, godot_js_input_paste_cb:function(a) {
  const b = Q(a);
  X(window, "paste", function(c) {
    c = c.clipboardData.getData("text");
    c = S(c);
    b(c);
    T(c);
  }, !1);
}, godot_js_input_touch_cb:function(a, b, c) {
  function d(g, h) {
    0 === g && U.focus();
    const k = f.getBoundingClientRect(), m = h.changedTouches;
    for (let r = 0; r < m.length; r++) {
      const x = m[r], z = Vg(x, k);
      C(c + 16 * r, z[0], "double");
      C(c + 8 * (2 * r + 1), z[1], "double");
      C(b + 4 * r, x.identifier, "i32");
    }
    e(g, m.length);
    h.cancelable && h.preventDefault();
  }
  const e = Q(a), f = U;
  X(f, "touchstart", d.bind(null, 0), !1);
  X(f, "touchend", d.bind(null, 1), !1);
  X(f, "touchcancel", d.bind(null, 1), !1);
  X(f, "touchmove", d.bind(null, 2), !1);
}, godot_js_input_vibrate_handheld:function(a) {
  "function" !== typeof navigator.vibrate ? cf("This browser does not support vibration.") : navigator.vibrate(a);
}, godot_js_is_ime_focused:function() {
  return Rg;
}, godot_js_os_download_buffer:function(a, b, c, d) {
  a = ff(t, a, b);
  c = D(c);
  d = D(d);
  d = window.URL.createObjectURL(new Blob([a], {type:d}));
  a = document.createElement("a");
  a.href = d;
  a.download = c;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(d);
}, godot_js_os_execute:function(a) {
  a = D(a);
  a = JSON.parse(a);
  return of ? (of(a), 0) : 1;
}, godot_js_os_finish_async:function(a) {
  a = Q(a);
  zf(a);
}, godot_js_os_fs_is_persistent:function() {
  return qf ? 1 : 0;
}, godot_js_os_fs_sync:function(a) {
  const b = Q(a);
  yf = uf();
  yf.then(function() {
    b();
  });
}, godot_js_os_has_feature:function(a) {
  a = D(a);
  const b = navigator.userAgent;
  return "web_macos" === a ? -1 !== b.indexOf("Mac") ? 1 : 0 : "web_windows" === a ? -1 !== b.indexOf("Windows") ? 1 : 0 : "web_android" === a ? -1 !== b.indexOf("Android") ? 1 : 0 : "web_ios" === a ? -1 !== b.indexOf("iPhone") || -1 !== b.indexOf("iPad") || -1 !== b.indexOf("iPod") ? 1 : 0 : "web_linuxbsd" === a ? -1 !== b.indexOf("CrOS") || -1 !== b.indexOf("BSD") || -1 !== b.indexOf("Linux") || -1 !== b.indexOf("X11") ? 1 : 0 : 0;
}, godot_js_os_hw_concurrency_get:function() {
  const a = navigator.hardwareConcurrency || 1;
  return 2 > a ? a : 2;
}, godot_js_os_request_quit_cb:function(a) {
  wf = Q(a);
}, godot_js_os_shell_open:function(a) {
  window.open(D(a), "_blank");
}, godot_js_pwa_cb:function(a) {
  "serviceWorker" in navigator && (a = Q(a), navigator.serviceWorker.getRegistration().then(Xg.bind(null, a)));
}, godot_js_pwa_update:function() {
  return "serviceWorker" in navigator && Wg ? (navigator.serviceWorker.getRegistration().then(function(a) {
    a && a.waiting && a.waiting.postMessage("update");
  }), 0) : 1;
}, godot_js_rtc_datachannel_close:function(a) {
  Y[a] && Zg(a);
}, godot_js_rtc_datachannel_connect:function(a, b, c, d, e, f) {
  c = Q(c).bind(null, b);
  d = Q(d).bind(null, b);
  e = Q(e).bind(null, b);
  b = Q(f).bind(null, b);
  Yg(a, c, d, e, b);
}, godot_js_rtc_datachannel_destroy:function(a) {
  Zg(a);
  yg(a);
}, godot_js_rtc_datachannel_get_buffered_amount:function(a) {
  return $g(a, "bufferedAmount", 0);
}, godot_js_rtc_datachannel_id_get:function(a) {
  return $g(a, "id", 65535);
}, godot_js_rtc_datachannel_is_negotiated:function(a) {
  return $g(a, "negotiated", 65535);
}, godot_js_rtc_datachannel_is_ordered:function(a) {
  return $g(a, "ordered", !0);
}, godot_js_rtc_datachannel_label_get:function(a) {
  return (a = Y[a]) && a.label ? S(a.label) : 0;
}, godot_js_rtc_datachannel_max_packet_lifetime_get:function(a) {
  return (a = Y[a]) ? void 0 !== a.maxPacketLifeTime ? a.maxPacketLifeTime : void 0 !== a.maxRetransmitTime ? a.maxRetransmitTime : 65535 : 65535;
}, godot_js_rtc_datachannel_max_retransmits_get:function(a) {
  return $g(a, "maxRetransmits", 65535);
}, godot_js_rtc_datachannel_protocol_get:function(a) {
  return (a = Y[a]) && a.protocol ? S(a.protocol) : 0;
}, godot_js_rtc_datachannel_ready_state_get:function(a) {
  a = Y[a];
  if (!a) {
    return 3;
  }
  switch(a.readyState) {
    case "connecting":
      return 0;
    case "open":
      return 1;
    case "closing":
      return 2;
    default:
      return 3;
  }
}, godot_js_rtc_datachannel_send:function(a, b, c, d) {
  a = Y[a];
  if (!a) {
    return 1;
  }
  const e = new Uint8Array(c);
  for (let f = 0; f < c; f++) {
    e[f] = lb(b + f, "i8");
  }
  d ? a.send(e.buffer) : (b = (new TextDecoder("utf-8")).decode(e), a.send(b));
  return 0;
}, godot_js_rtc_pc_close:function(a) {
  (a = Y[a]) && a.close();
}, godot_js_rtc_pc_create:function(a, b, c, d, e, f, g) {
  function h(k) {
    return Q(k).bind(null, b);
  }
  return eh(JSON.parse(D(a)), h(c), h(e), h(d), h(f), h(g));
}, godot_js_rtc_pc_datachannel_create:function(a, b, c) {
  try {
    const d = Y[a];
    if (!d) {
      return 0;
    }
    const e = D(b), f = JSON.parse(D(c)), g = d.createDataChannel(e, f);
    return xg(g);
  } catch (d) {
    return R(d), 0;
  }
}, godot_js_rtc_pc_destroy:function(a) {
  const b = Y[a];
  b && (b.onconnectionstatechange = null, b.oniceconnectionstatechange = null, b.onicegatheringstatechange = null, b.onsignalingstatechange = null, b.onicecandidate = null, b.ondatachannel = null, yg(a));
}, godot_js_rtc_pc_ice_candidate_add:function(a, b, c, d) {
  if (a = Y[a]) {
    b = D(b), d = D(d), a.addIceCandidate(new RTCIceCandidate({candidate:d, sdpMid:b, sdpMlineIndex:c,}));
  }
}, godot_js_rtc_pc_local_description_set:function(a, b, c, d, e) {
  const f = Y[a];
  if (f) {
    b = D(b);
    c = D(c);
    var g = Q(e).bind(null, d);
    f.setLocalDescription({sdp:c, type:b,}).catch(function(h) {
      Y[a] && (R(h), g());
    });
  }
}, godot_js_rtc_pc_offer_create:function(a, b, c, d) {
  const e = Y[a];
  if (e) {
    var f = Q(c).bind(null, b), g = Q(d).bind(null, b);
    e.createOffer().then(function(h) {
      fh(a, f, h);
    }).catch(function(h) {
      Y[a] && (R(h), g());
    });
  }
}, godot_js_rtc_pc_remote_description_set:function(a, b, c, d, e, f) {
  const g = Y[a];
  if (g) {
    var h = D(b);
    b = D(c);
    var k = Q(f).bind(null, d), m = Q(e).bind(null, d);
    g.setRemoteDescription({sdp:b, type:h,}).then(function() {
      return "offer" !== h ? Promise.resolve() : g.createAnswer().then(function(r) {
        fh(a, m, r);
      });
    }).catch(function(r) {
      Y[a] && (R(r), k());
    });
  }
}, godot_js_set_ime_active:function(a) {
  Sg(a);
}, godot_js_set_ime_cb:function(a, b, c, d) {
  a = Q(a);
  b = Q(b);
  Tg(a, b, c, d);
}, godot_js_set_ime_position:function(a, b) {
  if (Qg) {
    const c = U, d = c.getBoundingClientRect();
    b = b / (c.height / d.height) + d.y;
    Qg.style.left = `${a / (c.width / d.width) + d.x}px`;
    Qg.style.top = `${b}px`;
  }
}, godot_js_tts_get_voices:function(a) {
  a = Q(a);
  try {
    const b = [], c = window.speechSynthesis.getVoices();
    for (let e = 0; e < c.length; e++) {
      b.push(`${c[e].lang};${c[e].name}`);
    }
    const d = hf(b);
    a(b.length, d);
    jf(d, b.length);
  } catch (b) {
  }
}, godot_js_tts_is_paused:function() {
  return window.speechSynthesis.paused;
}, godot_js_tts_is_speaking:function() {
  return window.speechSynthesis.G;
}, godot_js_tts_pause:function() {
  window.speechSynthesis.pause();
}, godot_js_tts_resume:function() {
  window.speechSynthesis.resume();
}, godot_js_tts_speak:function(a, b, c, d, e, f, g) {
  g = Q(g);
  a = new SpeechSynthesisUtterance(D(a));
  a.rate = e;
  a.pitch = d;
  a.volume = c / 100.0;
  a.addEventListener("end", function(h) {
    h.currentTarget.Ca(1, h.currentTarget.id, 0);
  });
  a.addEventListener("start", function(h) {
    h.currentTarget.Ca(0, h.currentTarget.id, 0);
  });
  a.addEventListener("error", function(h) {
    h.currentTarget.Ca(2, h.currentTarget.id, 0);
  });
  a.addEventListener("boundary", function(h) {
    h.currentTarget.Ca(3, h.currentTarget.id, h.ad);
  });
  a.id = f;
  a.Ca = g;
  b = D(b);
  c = window.speechSynthesis.getVoices();
  for (d = 0; d < c.length; d++) {
    if (c[d].name === b) {
      a.voice = c[d];
      break;
    }
  }
  window.speechSynthesis.resume();
  window.speechSynthesis.speak(a);
}, godot_js_tts_stop:function() {
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();
}, godot_js_websocket_buffered_amount:function(a) {
  return (a = Y[a]) ? a.bufferedAmount : 0;
}, godot_js_websocket_close:function(a, b, c) {
  c = D(c);
  (a = Y[a]) && a.readyState < a.CLOSING && a.close(b, c);
}, godot_js_websocket_create:function(a, b, c, d, e, f, g) {
  d = Q(d).bind(null, a);
  e = Q(e).bind(null, a);
  f = Q(f).bind(null, a);
  a = Q(g).bind(null, a);
  b = D(b);
  c = D(c);
  g = null;
  try {
    g = c ? new WebSocket(b, c.split(",")) : new WebSocket(b);
  } catch (h) {
    return 0;
  }
  g.binaryType = "arraybuffer";
  c = g;
  b = xg(c);
  c.onopen = gh.bind(null, b, d);
  c.onmessage = hh.bind(null, b, e);
  c.onerror = ih.bind(null, b, f);
  c.onclose = jh.bind(null, b, a);
  return b;
}, godot_js_websocket_destroy:function(a) {
  const b = Y[a];
  if (b) {
    const c = Y[a];
    c && c.readyState < c.CLOSING && c.close(3001, "destroyed");
    yg(a);
    b.onopen = null;
    b.onmessage = null;
    b.onerror = null;
    b.onclose = null;
  }
}, godot_js_websocket_send:function(a, b, c, d) {
  const e = new Uint8Array(c);
  let f;
  for (f = 0; f < c; f++) {
    e[f] = lb(b + f, "i8");
  }
  b = e.buffer;
  d || (b = (new TextDecoder("utf-8")).decode(e));
  (a = Y[a]) && a.readyState === a.OPEN ? (a.send(b), a = 0) : a = 1;
  return a;
}, godot_js_wrapper_create_cb:function(a, b) {
  const c = Q(b);
  let d = 0;
  return d = nh(function() {
    if (oh(d)) {
      lh = null;
      var e = Array.from(arguments), f = new mh(e);
      c(a, f.Hb(), e.length);
      f.Tb();
      e = lh;
      lh = null;
      return e;
    }
  });
}, godot_js_wrapper_create_object:function(a, b, c, d, e, f, g) {
  a = D(a);
  if ("undefined" === typeof window[a]) {
    return -1;
  }
  d = Q(d);
  g = Q(g);
  const h = Array(c);
  for (let k = 0; k < c; k++) {
    const m = d(b, k, e, f), r = lb(f, "*");
    h[k] = ph(m, e);
    r && g(f, m);
  }
  try {
    const k = new window[a](...h);
    return qh(k, e);
  } catch (k) {
    return R(`Error calling constructor ${a} with args:`, h, "error:", k), -1;
  }
}, godot_js_wrapper_interface_get:function(a) {
  a = D(a);
  return "undefined" !== typeof window[a] ? nh(window[a]) : 0;
}, godot_js_wrapper_object_call:function(a, b, c, d, e, f, g, h) {
  a = oh(a);
  if (void 0 === a) {
    return -1;
  }
  b = D(b);
  e = Q(e);
  h = Q(h);
  const k = Array(d);
  for (let m = 0; m < d; m++) {
    const r = e(c, m, f, g), x = lb(g, "*");
    k[m] = ph(r, f);
    x && h(g, r);
  }
  try {
    const m = a[b](...k);
    return qh(m, f);
  } catch (m) {
    return R(`Error calling method ${b} on:`, a, "error:", m), -1;
  }
}, godot_js_wrapper_object_get:function(a, b, c) {
  a = oh(a);
  if (void 0 === a) {
    return 0;
  }
  if (c) {
    c = D(c);
    try {
      return qh(a[c], b);
    } catch (d) {
      return R(`Error getting variable ${c} on object`, a), 0;
    }
  }
  return qh(a, b);
}, godot_js_wrapper_object_getvar:function(a, b, c) {
  a = oh(a);
  if (void 0 === a) {
    return -1;
  }
  b = ph(b, c);
  if (void 0 === b || null === b) {
    return -1;
  }
  try {
    return qh(a[b], c);
  } catch (d) {
    return R(`Error getting variable ${b} on object`, a, d), -1;
  }
}, godot_js_wrapper_object_set:function(a, b, c, d) {
  a = oh(a);
  if (void 0 !== a) {
    b = D(b);
    try {
      a[b] = ph(c, d);
    } catch (e) {
      R(`Error setting variable ${b} on object`, a);
    }
  }
}, godot_js_wrapper_object_set_cb_ret:function(a, b) {
  lh = ph(a, b);
}, godot_js_wrapper_object_setvar:function(a, b, c, d, e) {
  a = oh(a);
  if (void 0 === a) {
    return -1;
  }
  b = ph(b, c);
  try {
    return a[b] = ph(d, e), 0;
  } catch (f) {
    return R(`Error setting variable ${b} on object`, a), -1;
  }
}, godot_js_wrapper_object_unref:function(a) {
  a = Y[a];
  void 0 !== a && a.Tb();
}, godot_webgl2_glFramebufferTextureMultisampleMultiviewOVR:function(a, b, c, d, e, f, g) {
  const h = O;
  if ("undefined" === typeof h.Nb) {
    const k = h.A.getExtension("OCULUS_multiview");
    if (!k) {
      R("Trying to call glFramebufferTextureMultisampleMultiviewOVR() without the OCULUS_multiview extension");
      return;
    }
    h.Nb = k;
  }
  h.Nb.framebufferTextureMultisampleMultiviewOVR(a, b, Od[c], d, e, f, g);
}, godot_webgl2_glFramebufferTextureMultiviewOVR:function(a, b, c, d, e, f) {
  const g = O;
  if ("undefined" === typeof g.Lb) {
    const h = g.A.getExtension("OVR_multiview2");
    if (!h) {
      R("Trying to call glFramebufferTextureMultiviewOVR() without the OVR_multiview2 extension");
      return;
    }
    g.Lb = h;
  }
  g.Lb.framebufferTextureMultiviewOVR(a, b, Od[c], d, e, f);
}, godot_webgl2_glGetBufferSubData:function(a, b, c, d) {
  const e = Rd[O ? O.handle : 0];
  e && e.A.getBufferSubData(a, b, v, d, c);
}, godot_webxr_get_bounds_geometry:function(a) {
  if (!uh || !uh.boundsGeometry) {
    return 0;
  }
  const b = uh.boundsGeometry.length;
  if (0 === b) {
    return 0;
  }
  const c = We(12 * b);
  for (let d = 0; d < b; d++) {
    const e = uh.boundsGeometry[d];
    C(c + 12 * d, e.x, "float");
    C(c + 4 * (3 * d + 1), e.y, "float");
    C(c + 4 * (3 * d + 2), e.z, "float");
  }
  C(a, c, "i32");
  return b;
}, godot_webxr_get_color_texture:function() {
  const a = Fh();
  return null === a ? 0 : Gh(a.colorTexture);
}, godot_webxr_get_depth_texture:function() {
  const a = Fh();
  return null !== a && a.depthStencilTexture ? Gh(a.depthStencilTexture) : 0;
}, godot_webxr_get_frame_rate:function() {
  return Z && void 0 !== Z.frameRate ? Z.frameRate : 0;
}, godot_webxr_get_projection_for_view:function(a, b) {
  if (!Z || !wh) {
    return !1;
  }
  a = wh.views[a].projectionMatrix;
  for (let c = 0; 16 > c; c++) {
    C(b + 4 * c, a[c], "float");
  }
  return !0;
}, godot_webxr_get_render_target_size:function(a) {
  const b = Fh();
  if (null === b) {
    return !1;
  }
  C(a + 0, b.viewport.width, "i32");
  C(a + 4, b.viewport.height, "i32");
  return !0;
}, godot_webxr_get_supported_frame_rates:function(a) {
  if (!Z || void 0 === Z.supportedFrameRates) {
    return 0;
  }
  const b = Z.supportedFrameRates.length;
  if (0 === b) {
    return 0;
  }
  const c = We(4 * b);
  for (let d = 0; d < b; d++) {
    C(c + 4 * d, Z.supportedFrameRates[d], "float");
  }
  C(a, c, "i32");
  return b;
}, godot_webxr_get_transform_for_view:function(a, b) {
  if (!Z || !wh) {
    return !1;
  }
  var c = wh.views;
  a = 0 <= a ? c[a].transform.matrix : wh.transform.matrix;
  for (c = 0; 16 > c; c++) {
    C(b + 4 * c, a[c], "float");
  }
  return !0;
}, godot_webxr_get_velocity_texture:function() {
  const a = Fh();
  return null !== a && a.motionVectorTexture ? Gh(a.motionVectorTexture) : 0;
}, godot_webxr_get_view_count:function() {
  if (!Z || !wh) {
    return 1;
  }
  const a = wh.views.length;
  return 0 < a ? a : 1;
}, godot_webxr_get_visibility_state:function() {
  return Z && Z.visibilityState ? S(Z.visibilityState) : 0;
}, godot_webxr_initialize:function(a, b, c, d, e, f, g, h, k) {
  null === Bh && (Bh = Ad);
  Ad = Ch;
  a = D(a);
  b = D(b).split(",").map(u => u.trim()).filter(u => "" !== u);
  c = D(c).split(",").map(u => u.trim()).filter(u => "" !== u);
  const m = D(d).split(",").map(u => u.trim()), r = Q(e), x = Q(f), z = Q(g), q = Q(h), y = Q(k);
  d = {};
  0 < b.length && (d.requiredFeatures = b);
  0 < c.length && (d.optionalFeatures = c);
  navigator.xr.requestSession(a, d).then(function(u) {
    Z = u;
    u.addEventListener("end", function() {
      x();
    });
    u.addEventListener("inputsourceschange", function(H) {
      H.added.forEach(Hh);
      H.removed.forEach(Ih);
    });
    ["selectstart", "selectend", "squeezestart", "squeezeend"].forEach((H, qa) => {
      u.addEventListener(H, function(ua) {
        vh = ua.frame;
        ua = ua.inputSource;
        q(qa, void 0 !== ua ? ua.name : -1);
        vh = null;
      });
    });
    u.addEventListener("visibilitychange", function() {
      const H = S("visibility_state_changed");
      y(H);
      T(H);
    });
    Ah = y;
    const F = Rd[O ? O.handle : 0].A;
    rh = F;
    F.makeXRCompatible().then(function() {
      function H(ua, da) {
        uh = ua;
        ua.onreset = function() {
          const aa = S("reference_space_reset");
          y(aa);
          T(aa);
        };
        Dh();
        window.setTimeout(function() {
          const aa = S(da), Bb = S(Array.from(u.G).join(","));
          r(aa, Bb);
          T(aa);
          T(Bb);
        }, 0);
      }
      function qa() {
        const ua = m.shift();
        u.requestReferenceSpace(ua).then(da => {
          H(da, ua);
        }).catch(() => {
          if (0 === m.length) {
            const da = S("Unable to get any of the requested reference space types");
            z(da);
            T(da);
          } else {
            qa();
          }
        });
      }
      sh = new XRWebGLBinding(u, F);
      Eh();
      qa();
    }).catch(function(H) {
      H = S(`Unable to make WebGL context compatible with WebXR: ${H}`);
      z(H);
      T(H);
    });
  }).catch(function(u) {
    u = S(`Unable to start session: ${u}`);
    z(u);
    T(u);
  });
}, godot_webxr_is_session_supported:function(a, b) {
  const c = D(a), d = Q(b);
  navigator.xr ? navigator.xr.isSessionSupported(c).then(function(e) {
    const f = S(c);
    d(f, e ? 1 : 0);
    T(f);
  }) : (a = S(c), d(a, 0), T(a));
}, godot_webxr_is_supported:function() {
  return !!navigator.xr;
}, godot_webxr_uninitialize:function() {
  Z && Z.end().catch(() => {
  });
  wh = vh = uh = th = sh = Z = null;
  xh = 1;
  yh = Array(16);
  zh = Array(5);
  Ah = null;
  null === Bh && (Bh = Ad);
  Ad = Bh;
  Dh();
}, godot_webxr_update_input_source:function(a, b, c, d, e, f, g, h, k, m, r, x, z, q) {
  if (!Z || !vh) {
    return 0;
  }
  if (0 > a || a >= yh.length || !yh[a]) {
    return !1;
  }
  a = yh[a];
  const y = vh, u = uh;
  var F = y.getPose(a.targetRaySpace, u);
  if (!F) {
    return !1;
  }
  F = F.transform.matrix;
  for (let H = 0; 16 > H; H++) {
    C(b + 4 * H, F[H], "float");
  }
  b = 0;
  switch(a.targetRayMode) {
    case "gaze":
      b = 1;
      break;
    case "tracked-pointer":
      b = 2;
      break;
    case "screen":
      b = 3;
  }
  C(c, b, "i32");
  C(d, void 0 !== a.Ya ? a.Ya : -1, "i32");
  c = !1;
  if (a.gripSpace && (d = y.getPose(a.gripSpace, u))) {
    c = d.transform.matrix;
    for (d = 0; 16 > d; d++) {
      C(f + 4 * d, c[d], "float");
    }
    c = !0;
  }
  C(e, c ? 1 : 0, "i32");
  e = !1;
  c = f = 0;
  if (a.gamepad) {
    "xr-standard" === a.gamepad.mapping && (e = !0);
    f = Math.min(a.gamepad.buttons.length, 10);
    for (c = 0; c < f; c++) {
      C(k + 4 * c, a.gamepad.buttons[c].value, "float");
    }
    c = Math.min(a.gamepad.axes.length, 10);
    for (k = 0; k < c; k++) {
      C(r + 4 * k, a.gamepad.axes[k], "float");
    }
  }
  C(g, e ? 1 : 0, "i32");
  C(h, f, "i32");
  C(m, c, "i32");
  g = !1;
  a.hand && 0 !== z && 0 !== q && (h = new Float32Array(400), m = new Float32Array(25), y.fillPoses(a.hand.values(), u, h) && y.fillJointRadii(a.hand.values(), m) && (B.set(h, z / h.BYTES_PER_ELEMENT), B.set(m, q / m.BYTES_PER_ELEMENT), g = !0));
  C(x, g ? 1 : 0, "i32");
  return !0;
}, godot_webxr_update_target_frame_rate:function(a) {
  Z && void 0 !== Z.updateTargetFrameRate && Z.updateTargetFrameRate(a).then(() => {
    const b = S("display_refresh_rate_changed");
    Ah(b);
    T(b);
  });
}, invoke_ii:Wh, invoke_iii:Xh, invoke_iiii:Yh, invoke_iiiii:Zh, invoke_iiiiiii:$h, invoke_iiiiiiiiii:ai, invoke_v:bi, invoke_vi:ci, invoke_vii:di, invoke_viii:ei, invoke_viiii:fi, proc_exit:ee, strftime:Mh, strftime_l:(a, b, c, d) => Mh(a, b, c, d)}, $a = function() {
  function a(d) {
    $a = d.exports;
    wa = $a.memory;
    p(wa, "memory not found in wasm exports");
    Da();
    qb = $a.__indirect_function_table;
    p(qb, "table not found in wasm exports");
    La.unshift($a.__wasm_call_ctors);
    Sa--;
    l.monitorRunDependencies?.(Sa);
    p(Va["wasm-instantiate"]);
    delete Va["wasm-instantiate"];
    0 == Sa && (null !== Ta && (clearInterval(Ta), Ta = null), Ua && (d = Ua, Ua = null, d()));
    return $a;
  }
  var b = {env:gi, wasi_snapshot_preview1:gi,};
  Wa();
  var c = l;
  if (l.instantiateWasm) {
    try {
      return l.instantiateWasm(b, a);
    } catch (d) {
      n(`Module.instantiateWasm callback failed with error: ${d}`), ca(d);
    }
  }
  ab ||= Xa("godot.web.template_release.dev.wasm32.nothreads.wasm") ? "godot.web.template_release.dev.wasm32.nothreads.wasm" : l.locateFile ? l.locateFile("godot.web.template_release.dev.wasm32.nothreads.wasm", pa) : pa + "godot.web.template_release.dev.wasm32.nothreads.wasm";
  eb(b, function(d) {
    p(l === c, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    c = null;
    a(d.instance);
  }).catch(ca);
  return {};
}(), T = Za("free", 1);
l.__Z14godot_web_mainiPPc = Za("_Z14godot_web_mainiPPc", 2);
var hi = l._main = Za("__main_argc_argv", 2), We = Za("malloc", 1), ge = Za("fflush", 1), Vh = Za("htonl", 1), Yc = Za("htons", 1), fd = Za("ntohs", 1);
l.__emwebxr_on_input_event = Za("_emwebxr_on_input_event", 2);
l.__emwebxr_on_simple_event = Za("_emwebxr_on_simple_event", 1);
var fe = Za("__funcs_on_exit", 0), ii = Za("setThrew", 2), ji = () => (ji = $a.emscripten_stack_init)(), Fa = () => (Fa = $a.emscripten_stack_get_end)(), Qh = a => (Qh = $a._emscripten_stack_restore)(a), Nh = a => (Nh = $a._emscripten_stack_alloc)(a), ie = () => (ie = $a.emscripten_stack_get_current)();
function ci(a, b) {
  var c = ie();
  try {
    rb(a)(b);
  } catch (d) {
    Qh(c);
    if (d !== d + 0) {
      throw d;
    }
    ii(1, 0);
  }
}
function ei(a, b, c, d) {
  var e = ie();
  try {
    rb(a)(b, c, d);
  } catch (f) {
    Qh(e);
    if (f !== f + 0) {
      throw f;
    }
    ii(1, 0);
  }
}
function di(a, b, c) {
  var d = ie();
  try {
    rb(a)(b, c);
  } catch (e) {
    Qh(d);
    if (e !== e + 0) {
      throw e;
    }
    ii(1, 0);
  }
}
function fi(a, b, c, d, e) {
  var f = ie();
  try {
    rb(a)(b, c, d, e);
  } catch (g) {
    Qh(f);
    if (g !== g + 0) {
      throw g;
    }
    ii(1, 0);
  }
}
function Xh(a, b, c) {
  var d = ie();
  try {
    return rb(a)(b, c);
  } catch (e) {
    Qh(d);
    if (e !== e + 0) {
      throw e;
    }
    ii(1, 0);
  }
}
function Wh(a, b) {
  var c = ie();
  try {
    return rb(a)(b);
  } catch (d) {
    Qh(c);
    if (d !== d + 0) {
      throw d;
    }
    ii(1, 0);
  }
}
function bi(a) {
  var b = ie();
  try {
    rb(a)();
  } catch (c) {
    Qh(b);
    if (c !== c + 0) {
      throw c;
    }
    ii(1, 0);
  }
}
function Yh(a, b, c, d) {
  var e = ie();
  try {
    return rb(a)(b, c, d);
  } catch (f) {
    Qh(e);
    if (f !== f + 0) {
      throw f;
    }
    ii(1, 0);
  }
}
function Zh(a, b, c, d, e) {
  var f = ie();
  try {
    return rb(a)(b, c, d, e);
  } catch (g) {
    Qh(f);
    if (g !== g + 0) {
      throw g;
    }
    ii(1, 0);
  }
}
function ai(a, b, c, d, e, f, g, h, k, m) {
  var r = ie();
  try {
    return rb(a)(b, c, d, e, f, g, h, k, m);
  } catch (x) {
    Qh(r);
    if (x !== x + 0) {
      throw x;
    }
    ii(1, 0);
  }
}
function $h(a, b, c, d, e, f, g) {
  var h = ie();
  try {
    return rb(a)(b, c, d, e, f, g);
  } catch (k) {
    Qh(h);
    if (k !== k + 0) {
      throw k;
    }
    ii(1, 0);
  }
}
l.callMain = ki;
l.cwrap = (a, b, c) => (...d) => Rh(a, b, c, d);
"writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 emscriptenLog readEmAsmArgs listenOnce autoResumeAudioContext getDynCaller dynCall asmjsMangle HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 registerKeyEventCallback getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback ExceptionInfo findMatchingCatch Browser_asyncPrepareDataCounter FS_unlink FS_mkdirTree _setNetworkCallback emscriptenWebGLGetUniform emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError emscriptenWebGLGetIndexed ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory setErrNo demangle stackTrace".split(" ").forEach(function(a) {
  "undefined" == typeof globalThis || Object.getOwnPropertyDescriptor(globalThis, a) || Object.defineProperty(globalThis, a, {configurable:!0, get() {
    var b = `\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`, c = a;
    c.startsWith("_") || (c = "$" + a);
    b += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`;
    fb(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    hb(b);
  }});
  ib(a);
});
"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createLazyFile FS_createLink FS_createDevice FS_readFile out err abort wasmMemory wasmExports writeStackCookie checkStackCookie writeI53ToI64 readI53FromI64 readI53FromU64 MAX_INT53 MIN_INT53 bigintToI53Checked stackSave stackRestore stackAlloc ptrToString zeroMemory exitJS getHeapMax growMemory ENV MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate arraySum addDays ERRNO_CODES ERRNO_MESSAGES inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr DNS Protocols Sockets initRandomFill randomFill timers warnOnce readEmAsmArgsArray jstoi_q jstoi_s getExecutableName handleException keepRuntimeAlive runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime getCFunc ccall freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 intArrayFromString stringToAscii UTF16Decoder stringToNewUTF8 stringToUTF8OnStack writeArrayToMemory JSEvents specialHTMLTargets maybeCStringToJsString findEventTarget findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings doReadv doWritev safeSetTimeout promiseMap uncaughtExceptionCount exceptionLast exceptionCaught Browser setMainLoop getPreloadedImageData__data wget SYSCALLS getSocketFromFD getSocketAddress preloadPlugins FS_createPreloadedFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS FS_createDataFile MEMFS TTY PIPEFS SOCKFS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw GL emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos AL GLUT EGL GLEW IDBStore SDL SDL_gfx webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance allocateUTF8 allocateUTF8OnStack GodotWebXR GodotWebSocket GodotRTCDataChannel GodotRTCPeerConnection GodotAudio GodotAudioWorklet GodotAudioScript GodotDisplayVK GodotDisplayCursor GodotDisplayScreen GodotDisplay GodotFetch IDHandler GodotConfig GodotFS GodotOS GodotEventListeners GodotPWA GodotRuntime GodotIME GodotInputGamepads GodotInputDragDrop GodotInput GodotWebGL2 GodotJSWrapper IDBFS".split(" ").forEach(ib);
var li;
Ua = function mi() {
  li || ni();
  li || (Ua = mi);
};
function ki(a = []) {
  p(0 == Sa, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  p(0 == Ka.length, "cannot call main when preRun functions remain to be called");
  a.unshift(na);
  var b = a.length, c = Nh(4 * (b + 1)), d = c;
  a.forEach(f => {
    A[d >> 2] = Oh(f);
    d += 4;
  });
  A[d >> 2] = 0;
  try {
    var e = hi(b, c);
    he(e, !0);
    return e;
  } catch (f) {
    return je(f);
  }
}
function ni() {
  var a = ma;
  function b() {
    if (!li && (li = !0, l.calledRun = !0, !xa)) {
      p(!Pa);
      Pa = !0;
      Ga();
      if (!l.noFSInit && !Lc) {
        p(!Lc, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        Lc = !0;
        l.stdin = l.stdin;
        l.stdout = l.stdout;
        l.stderr = l.stderr;
        l.stdin ? Mc("stdin", l.stdin) : Dc("/dev/tty", "/dev/stdin");
        l.stdout ? Mc("stdout", null, l.stdout) : Dc("/dev/tty", "/dev/stdout");
        l.stderr ? Mc("stderr", null, l.stderr) : Dc("/dev/tty1", "/dev/stderr");
        var c = Gc("/dev/stdin", 0), d = Gc("/dev/stdout", 1), e = Gc("/dev/stderr", 1);
        p(0 === c.o, `invalid handle for stdin (${c.o})`);
        p(1 === d.o, `invalid handle for stdout (${d.o})`);
        p(2 === e.o, `invalid handle for stderr (${e.o})`);
      }
      gc = !1;
      Vc.root = yc(Vc, null);
      kb(La);
      Ga();
      kb(Ma);
      ba(l);
      if (l.onRuntimeInitialized) {
        l.onRuntimeInitialized();
      }
      oi && ki(a);
      Ga();
      if (l.postRun) {
        for ("function" == typeof l.postRun && (l.postRun = [l.postRun]); l.postRun.length;) {
          c = l.postRun.shift(), Oa.unshift(c);
        }
      }
      kb(Oa);
    }
  }
  if (!(0 < Sa)) {
    ji();
    Ea();
    if (l.preRun) {
      for ("function" == typeof l.preRun && (l.preRun = [l.preRun]); l.preRun.length;) {
        Ra();
      }
    }
    kb(Ka);
    0 < Sa || (l.setStatus ? (l.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        l.setStatus("");
      }, 1);
      b();
    }, 1)) : b(), Ga());
  }
}
if (l.preInit) {
  for ("function" == typeof l.preInit && (l.preInit = [l.preInit]); 0 < l.preInit.length;) {
    l.preInit.pop()();
  }
}
var oi = !1;
l.noInitialRun && (oi = !1);
ni();
moduleRtn = ea;
for (const a of Object.keys(l)) {
  a in moduleArg || Object.defineProperty(moduleArg, a, {configurable:!0, get() {
    fa(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
  }});
}
;


  return moduleRtn;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Godot;
else if (typeof define === 'function' && define['amd'])
  define([], () => Godot);

function t(c=1){try{return!!document.createElement("canvas").getContext(["webgl","webgl2"][c-1])}catch(f){}return!1}function u(){return"fetch"in window&&"Response"in window&&"body"in window.Response.prototype}function v(){return!0===window.isSecureContext}function w(){return!0===window.crossOriginIsolated}function x(){return"SharedArrayBuffer"in window}function y(){return"AudioContext"in window&&"audioWorklet"in AudioContext.prototype}
function z(c={}){({threads:c=!0}=c);const f=[];t(2)||f.push("WebGL2 - Check web browser configuration and hardware support");u()||f.push("Fetch - Check web browser version");v()||f.push("Secure Context - Check web server configuration (use HTTPS)");c&&(w()||f.push("Cross-Origin Isolation - Check that the web server configuration sends the correct headers."),x()||f.push("SharedArrayBuffer - Check that the web server configuration sends the correct headers."));return f};function A(){function c(){let a=0,d=0,m=!0,k=!0;Object.keys(n).forEach(function(e){e=n[e];e.done||(k=!1);m&&0!==e.total?d+=e.total:(m=!1,d=0);a+=e.loaded});if(a!==g||d!==p)g=a,p=d,"function"===typeof h&&h(a,d);k||requestAnimationFrame(c)}function f(a,d){function m(e,q){return e.read().then(function(r){if(d.done)return Promise.resolve();r.value&&(q.enqueue(r.value),d.loaded+=r.value.length);if(!r.done)return m(e,q);d.done=!0;return Promise.resolve()})}const k=a.body.getReader();return new Response(new ReadableStream({start:function(e){m(k,
e).then(function(){e.close()})}}),{headers:a.headers})}function l(a,d,m,k){d[a]={total:m||0,loaded:0,done:!1};return fetch(a).then(function(e){if(!e.ok)return Promise.reject(Error(`Failed loading file '${a}'`));e=f(e,d[a]);return k?Promise.resolve(e):e.arrayBuffer()})}function b(a,d=1){return a().catch(function(m){return 1>=d?Promise.reject(m):new Promise(function(k,e){setTimeout(function(){b(a,d-1).then(k).catch(e)},1E3)})})}const n={};var g=0,p=0;let h=null;this.S=c;this.T=function(a){h=a};this.s=
function(a,d,m=!1){return b(l.bind(null,a,n,d,m),4)};this.i=[];this.B=function(a,d,m){let k=null;if("string"===typeof a){const e=this;return this.s(a,m).then(function(q){e.i.push({path:d||a,buffer:q});return Promise.resolve()})}a instanceof ArrayBuffer?k=new Uint8Array(a):ArrayBuffer.isView(a)&&(k=new Uint8Array(a.buffer));return k?(this.i.push({path:d,buffer:a}),Promise.resolve()):Promise.reject(Error("Invalid object for preloading"))}};function B(c){function f(l){this.update(l)}f.prototype={M:!0,canvas:null,l:"",D:null,locale:null,u:2,j:[],A:!0,v:!1,serviceWorker:"",L:["/userfs"],K:!1,o:[],m:[],F:null,G:null,J:null,H:function(){console.log.apply(console,Array.from(arguments))},I:function(l){console.error.apply(console,Array.from(arguments))}};f.prototype.update=function(l){function b(g,p){return"undefined"===typeof n[g]?p:n[g]}const n=l||{};this.M=b("unloadAfterInit",this.M);this.I=b("onPrintError",this.I);this.H=b("onPrint",this.H);
this.J=b("onProgress",this.J);this.canvas=b("canvas",this.canvas);this.l=b("executable",this.l);this.D=b("mainPack",this.D);this.locale=b("locale",this.locale);this.u=b("canvasResizePolicy",this.u);this.L=b("persistentPaths",this.L);this.K=b("persistentDrops",this.K);this.v=b("experimentalVK",this.v);this.A=b("focusCanvas",this.A);this.serviceWorker=b("serviceWorker",this.serviceWorker);this.o=b("gdextensionLibs",this.o);this.m=b("fileSizes",this.m);this.j=b("args",this.j);this.F=b("onExecute",this.F);
this.G=b("onExit",this.G)};f.prototype.R=function(l,b){let n=b;return{print:this.H,printErr:this.I,thisProgram:this.l,noExitRuntime:!1,dynamicLibraries:[`${l}.side.wasm`],instantiateWasm:function(g,p){function h(a){p(a.instance,a.module)}"undefined"!==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(Promise.resolve(n),g).then(h):n.arrayBuffer().then(function(a){WebAssembly.instantiate(a,g).then(h)});n=null;return{}},locateFile:function(g){if(g.startsWith("godot.")){if(g.endsWith(".worker.js"))return`${l}.worker.js`;
if(g.endsWith(".audio.worklet.js"))return`${l}.audio.worklet.js`;if(g.endsWith(".js"))return`${l}.js`;if(g.endsWith(".side.wasm"))return`${l}.side.wasm`;if(g.endsWith(".wasm"))return`${l}.wasm`}return g}}};f.prototype.P=function(l){if(!(this.canvas instanceof HTMLCanvasElement)){var b=document.getElementsByTagName("canvas");b.length&&b[0]instanceof HTMLCanvasElement&&(this.canvas=b[0]);if(!this.canvas)throw Error("No canvas found in page");}0>this.canvas.tabIndex&&(this.canvas.tabIndex=0);b=this.locale;
b||(b=navigator.languages?navigator.languages[0]:navigator.language,b=b.split(".")[0]);b=b.replace("-","_");const n=this.G;return{canvas:this.canvas,canvasResizePolicy:this.u,locale:b,persistentDrops:this.K,virtualKeyboard:this.v,focusCanvas:this.A,onExecute:this.F,onExit:function(g){l();"function"===typeof n&&n(g)}}};return new f(c)};const C=function(){function c(p){this.g=new B(p);this.h=null}function f(p){c.prototype={C:function(h){if(g)return g;if(null==b){if(!h)return g=Promise.reject(Error("A base path must be provided when calling `init` and the engine is not loaded."));c.load(h,this.g.m[`${h}.wasm`])}const a=this;l.T(this.g.J);return g=function(d){return new Promise(function(m){d.then(function(k){k=new Response(k.clone().body,{headers:[["content-type","application/wasm"]]});Godot(a.g.R(n,k)).then(function(e){e.initFS(a.g.L).then(function(){a.h=
e;a.g.M&&c.i();m()})})})})}(b)},O:function(h,a){return l.B(h,a,this.g.m[h])},start:function(h){this.g.update(h);const a=this;return a.C().then(function(){if(!a.h)return Promise.reject(Error("The engine must be initialized before it can be started"));let d={};try{d=a.g.P(function(){a.h=null})}catch(k){return Promise.reject(k)}a.h.initConfig(d);const m=[];if(0<a.g.o.length&&!a.h.loadDynamicLibrary)return Promise.reject(Error('GDExtension libraries are not supported by this engine version. Enable "Extensions Support" for your export preset and/or build your custom template with "dlink_enabled=yes".'));
a.g.o.forEach(function(k){m.push(a.h.loadDynamicLibrary(k,{loadAsync:!0}))});return Promise.all(m).then(function(){return new Promise(function(k){l.i.forEach(function(e){a.h.copyToFS(e.path,e.buffer)});l.i.length=0;a.h.callMain(a.g.j);g=null;a.N();k()})})})},B:function(h){this.g.update(h);h=this.g.l;const a=this.g.D||`${h}.pck`;this.g.j=["--main-pack",a].concat(this.g.j);const d=this;return Promise.all([this.C(h),this.O(a,a)]).then(function(){return d.start.apply(d)})},i:function(h,a){if(null==this.h)throw Error("Engine must be inited before copying files");
this.h.copyToFS(h,a)},s:function(){this.h&&this.h.request_quit()},N:function(){return this.g.serviceWorker&&"serviceWorker"in navigator?navigator.serviceWorker.register(this.g.serviceWorker):Promise.resolve()}};c.prototype.init=c.prototype.C;c.prototype.preloadFile=c.prototype.O;c.prototype.start=c.prototype.start;c.prototype.startGame=c.prototype.B;c.prototype.copyToFS=c.prototype.i;c.prototype.requestQuit=c.prototype.s;c.prototype.installServiceWorker=c.prototype.N;c.prototype.load=c.load;c.prototype.unload=
c.i;return new c(p)}const l=new A;let b=null,n="",g=null;c.load=function(p,h){null==b&&(n=p,b=l.s(`${n}.wasm`,h,!0),requestAnimationFrame(l.S));return b};c.i=function(){b=null};f.load=c.load;f.unload=c.i;f.isWebGLAvailable=t;f.isFetchAvailable=u;f.isSecureContext=v;f.isCrossOriginIsolated=w;f.isSharedArrayBufferAvailable=x;f.isAudioWorkletAvailable=y;f.getMissingFeatures=z;return f}();"undefined"!==typeof window&&(window.Engine=C);
