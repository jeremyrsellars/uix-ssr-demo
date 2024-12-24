goog.provide('cljs_bean.core');
goog.scope(function(){
  cljs_bean.core.goog$module$goog$object = goog.module.get('goog.object');
});
cljs_bean.core.lookup_sentinel = ({});
cljs_bean.core.primitive_QMARK_ = (function cljs_bean$core$primitive_QMARK_(x){
return ((typeof x === 'number') || (((typeof x === 'string') || (((cljs.core.boolean_QMARK_(x)) || ((x == null)))))));
});
cljs_bean.core.__GT_val = (function cljs_bean$core$__GT_val(x,prop__GT_key,key__GT_prop,transform){
var temp__5806__auto__ = (((!((transform == null))))?(transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(x) : transform.call(null, x)):null);
if((temp__5806__auto__ == null)){
if(cljs_bean.core.primitive_QMARK_(x)){
return x;
} else {
if(cljs.core.object_QMARK_(x)){
return (new cljs_bean.core.Bean(null,x,prop__GT_key,key__GT_prop,transform,true,null,null,null));
} else {
if(cljs.core.array_QMARK_(x)){
return (new cljs_bean.core.ArrayVector(null,prop__GT_key,key__GT_prop,transform,x,null));
} else {
return x;

}
}
}
} else {
var transformed = temp__5806__auto__;
return transformed;
}
});
cljs_bean.core.unwrap = (function cljs_bean$core$unwrap(x){
if(cljs_bean.core.primitive_QMARK_(x)){
return x;
} else {
if((x instanceof cljs_bean.core.Bean)){
return x.obj;
} else {
if((x instanceof cljs_bean.core.ArrayVector)){
return x.arr;
} else {
return x;

}
}
}
});
cljs_bean.core.empty_map = cljs.core.PersistentArrayMap.EMPTY;
cljs_bean.core.snapshot = (function cljs_bean$core$snapshot(x,prop__GT_key,key__GT_prop,transform,recursive_QMARK_){
var result = cljs.core.volatile_BANG_(cljs.core.transient$(cljs_bean.core.empty_map));
cljs_bean.core.goog$module$goog$object.forEach(x,(function (v,k,_){
return result.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(result.cljs$core$IDeref$_deref$arity$1(null, ),(prop__GT_key.cljs$core$IFn$_invoke$arity$1 ? prop__GT_key.cljs$core$IFn$_invoke$arity$1(k) : prop__GT_key.call(null, k)),(function (){var G__22800 = v;
if(cljs.core.truth_(recursive_QMARK_)){
return cljs_bean.core.__GT_val(G__22800,prop__GT_key,key__GT_prop,transform);
} else {
return G__22800;
}
})()));
}));

return cljs.core.persistent_BANG_(cljs.core.deref(result));
});
cljs_bean.core.snapshot_arr = (function cljs_bean$core$snapshot_arr(arr){
return cljs.core.vec((function (){var a__5587__auto__ = arr;
var l__5588__auto__ = a__5587__auto__.length;
var ret = cljs.core.aclone(a__5587__auto__);
var idx = (0);
while(true){
if((idx < l__5588__auto__)){
(ret[idx] = (function (){var G__22802 = (arr[idx]);
return (cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1 ? cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(G__22802) : cljs_bean.core.__GT_clj.call(null, G__22802));
})());

var G__23263 = (idx + (1));
idx = G__23263;
continue;
} else {
return ret;
}
break;
}
})());
});
cljs_bean.core.indexed_entry = (function cljs_bean$core$indexed_entry(obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,arr,i){
var prop = (arr[i]);
return (new cljs.core.MapEntry((prop__GT_key.cljs$core$IFn$_invoke$arity$1 ? prop__GT_key.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_key.call(null, prop)),(function (){var G__22810 = (obj[prop]);
if(recursive_QMARK_){
return cljs_bean.core.__GT_val(G__22810,prop__GT_key,key__GT_prop,transform);
} else {
return G__22810;
}
})(),null));
});
cljs_bean.core.compatible_key_QMARK_ = (function cljs_bean$core$compatible_key_QMARK_(k,prop__GT_key){
return (((((k instanceof cljs.core.Keyword)) && ((prop__GT_key === cljs.core.keyword)))) || (((typeof k === 'string') && ((prop__GT_key === cljs.core.identity)))));
});
cljs_bean.core.compatible_value_QMARK_ = (function cljs_bean$core$compatible_value_QMARK_(v,recursive_QMARK_){
return ((cljs_bean.core.primitive_QMARK_(v)) || ((((!(((((cljs.core.map_QMARK_(v)) && ((!((v instanceof cljs_bean.core.Bean)))))) || (((cljs.core.vector_QMARK_(v)) && ((!((v instanceof cljs_bean.core.ArrayVector)))))))))) && (cljs.core.not((function (){var and__5000__auto____$1 = recursive_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return ((cljs.core.object_QMARK_(v)) || (cljs.core.array_QMARK_(v)));
} else {
return and__5000__auto____$1;
}
})())))));
});
cljs_bean.core.snapshot_QMARK_ = (function cljs_bean$core$snapshot_QMARK_(k,v,prop__GT_key,recursive_QMARK_){
return (!(((cljs_bean.core.compatible_key_QMARK_(k,prop__GT_key)) && (cljs_bean.core.compatible_value_QMARK_(v,recursive_QMARK_)))));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ITransientMap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.ILookup}
*/
cljs_bean.core.TransientBean = (function (editable_QMARK_,obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,__cnt){
this.editable_QMARK_ = editable_QMARK_;
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.recursive_QMARK_ = recursive_QMARK_;
this.__cnt = __cnt;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 56;
});
(cljs_bean.core.TransientBean.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
var G__22826 = (self__.obj[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val(G__22826,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22826;
}
} else {
throw (new Error("lookup after persistent!"));
}
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
var ret = cljs_bean.core.goog$module$goog$object.get(self__.obj,(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k)),not_found);
var G__22827 = ret;
if(((self__.recursive_QMARK_) && ((!((ret === not_found)))))){
return cljs_bean.core.__GT_val(G__22827,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22827;
}
} else {
throw (new Error("lookup after persistent!"));
}
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.__cnt == null)){
return (self__.__cnt = cljs.core.count(cljs.core.js_keys(self__.obj)));
} else {
return self__.__cnt;
}
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
return cljs_bean.from.cljs.core.TransientArrayMap_conj_BANG_(tcoll__$1,o,self__.editable_QMARK_);
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
(self__.editable_QMARK_ = false);

return (new cljs_bean.core.Bean(null,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,null,self__.__cnt,null));
} else {
throw (new Error("persistent! called twice"));
}
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,k,v){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if(cljs_bean.core.snapshot_QMARK_(k,v,self__.prop__GT_key,self__.recursive_QMARK_)){
return cljs.core._assoc_BANG_(cljs.core.transient$(cljs_bean.core.snapshot(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_)),k,v);
} else {
(self__.obj[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))] = (function (){var G__22837 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.unwrap(G__22837);
} else {
return G__22837;
}
})());

(self__.__cnt = null);

return tcoll__$1;
}
} else {
throw (new Error("assoc! after persistent!"));
}
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
delete self__.obj[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))];

(self__.__cnt = null);

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
}));

(cljs_bean.core.TransientBean.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__22839 = (arguments.length - (1));
switch (G__22839) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(cljs_bean.core.TransientBean.prototype.apply = (function (self__,args22825){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22825)));
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if(self__.editable_QMARK_){
var G__22841 = (self__.obj[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val(G__22841,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22841;
}
} else {
throw (new Error("lookup after persistent!"));
}
}));

(cljs_bean.core.TransientBean.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _ = this;
if(self__.editable_QMARK_){
var ret = cljs_bean.core.goog$module$goog$object.get(self__.obj,(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k)),not_found);
var G__22842 = ret;
if(((self__.recursive_QMARK_) && ((!((ret === not_found)))))){
return cljs_bean.core.__GT_val(G__22842,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22842;
}
} else {
throw (new Error("lookup after persistent!"));
}
}));

(cljs_bean.core.TransientBean.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"editable?","editable?",-164945806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__cnt","__cnt",1833584904,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs_bean.core.TransientBean.cljs$lang$type = true);

(cljs_bean.core.TransientBean.cljs$lang$ctorStr = "cljs-bean.core/TransientBean");

(cljs_bean.core.TransientBean.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/TransientBean");
}));

/**
 * Positional factory function for cljs-bean.core/TransientBean.
 */
cljs_bean.core.__GT_TransientBean = (function cljs_bean$core$__GT_TransientBean(editable_QMARK_,obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,__cnt){
return (new cljs_bean.core.TransientBean(editable_QMARK_,obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,__cnt));
});


/**
* @constructor
*/
cljs_bean.core.BeanIterator = (function (obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,arr,i,cnt){
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.recursive_QMARK_ = recursive_QMARK_;
this.arr = arr;
this.i = i;
this.cnt = cnt;
});
(cljs_bean.core.BeanIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
}));

(cljs_bean.core.BeanIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = cljs_bean.core.indexed_entry(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,self__.i);
(self__.i = (self__.i + (1)));

return ret;
}));

(cljs_bean.core.BeanIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"arr","arr",2115492975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null)], null);
}));

(cljs_bean.core.BeanIterator.cljs$lang$type = true);

(cljs_bean.core.BeanIterator.cljs$lang$ctorStr = "cljs-bean.core/BeanIterator");

(cljs_bean.core.BeanIterator.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/BeanIterator");
}));

/**
 * Positional factory function for cljs-bean.core/BeanIterator.
 */
cljs_bean.core.__GT_BeanIterator = (function cljs_bean$core$__GT_BeanIterator(obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,arr,i,cnt){
return (new cljs_bean.core.BeanIterator(obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,arr,i,cnt));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.BeanSeq = (function (obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,arr,i,meta){
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.recursive_QMARK_ = recursive_QMARK_;
this.arr = arr;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2179858686;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
(cljs_bean.core.BeanSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(cljs_bean.core.BeanSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null, other);
}));

(cljs_bean.core.BeanSeq.prototype.indexOf = (function() {
var G__23273 = null;
var G__23273__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(coll,x,(0));
});
var G__23273__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(coll,x,start);
});
G__23273 = function(x,start){
switch(arguments.length){
case 1:
return G__23273__1.call(this,x);
case 2:
return G__23273__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23273.cljs$core$IFn$_invoke$arity$1 = G__23273__1;
G__23273.cljs$core$IFn$_invoke$arity$2 = G__23273__2;
return G__23273;
})()
);

(cljs_bean.core.BeanSeq.prototype.lastIndexOf = (function() {
var G__23274 = null;
var G__23274__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(coll,x,cljs.core.count(coll));
});
var G__23274__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(coll,x,start);
});
G__23274 = function(x,start){
switch(arguments.length){
case 1:
return G__23274__1.call(this,x);
case 2:
return G__23274__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23274.cljs$core$IFn$_invoke$arity$1 = G__23274__1;
G__23274.cljs$core$IFn$_invoke$arity$2 = G__23274__2;
return G__23274;
})()
);

(cljs_bean.core.BeanSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.indexed_entry(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,i__$1);
} else {
throw (new Error("Index out of bounds"));
}
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.indexed_entry(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,i__$1);
} else {
return not_found;
}
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,self__.i,self__.meta));
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,(self__.i + (1)),null));
} else {
return null;
}
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__5087__auto__ = (0);
var y__5088__auto__ = (self__.arr.length - self__.i);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.equiv_sequential(coll__$1,other);
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start);
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs_bean.core.indexed_entry(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,self__.i);
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,(self__.i + (1)),null));
} else {
return cljs.core.List.EMPTY;
}
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.arr,self__.i,new_meta));
}
}));

(cljs_bean.core.BeanSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
}));

(cljs_bean.core.BeanSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cljs_bean.core.BeanSeq.cljs$lang$type = true);

(cljs_bean.core.BeanSeq.cljs$lang$ctorStr = "cljs-bean.core/BeanSeq");

(cljs_bean.core.BeanSeq.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/BeanSeq");
}));

/**
 * Positional factory function for cljs-bean.core/BeanSeq.
 */
cljs_bean.core.__GT_BeanSeq = (function cljs_bean$core$__GT_BeanSeq(obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,arr,i,meta){
return (new cljs_bean.core.BeanSeq(obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,arr,i,meta));
});


/**
* @constructor
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.Bean = (function (meta,obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,__arr,__cnt,__hash){
this.meta = meta;
this.obj = obj;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.recursive_QMARK_ = recursive_QMARK_;
this.__arr = __arr;
this.__cnt = __cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2164131599;
this.cljs$lang$protocol_mask$partition1$ = 139268;
});
(cljs_bean.core.Bean.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_bean.core.Bean.prototype.cljs$core$IFind$_find$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var v = cljs_bean.core.goog$module$goog$object.get(self__.obj,(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k)),cljs_bean.core.lookup_sentinel);
if((v === cljs_bean.core.lookup_sentinel)){
return null;
} else {
return (new cljs.core.MapEntry(k,(function (){var G__22897 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val(G__22897,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22897;
}
})(),null));
}
}));

(cljs_bean.core.Bean.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(cljs_bean.core.Bean.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null, other);
}));

(cljs_bean.core.Bean.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.keys(coll));
}));

(cljs_bean.core.Bean.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
}));

(cljs_bean.core.Bean.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.vals(coll));
}));

(cljs_bean.core.Bean.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
}));

(cljs_bean.core.Bean.prototype.get = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null, k,not_found);
}));

(cljs_bean.core.Bean.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__22899 = cljs.core.seq(coll);
var chunk__22900 = null;
var count__22901 = (0);
var i__22902 = (0);
while(true){
if((i__22902 < count__22901)){
var vec__22909 = chunk__22900.cljs$core$IIndexed$_nth$arity$2(null, i__22902);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22909,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22909,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null, v,k));


var G__23285 = seq__22899;
var G__23286 = chunk__22900;
var G__23287 = count__22901;
var G__23288 = (i__22902 + (1));
seq__22899 = G__23285;
chunk__22900 = G__23286;
count__22901 = G__23287;
i__22902 = G__23288;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22899);
if(temp__5804__auto__){
var seq__22899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22899__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22899__$1);
var G__23290 = cljs.core.chunk_rest(seq__22899__$1);
var G__23291 = c__5525__auto__;
var G__23292 = cljs.core.count(c__5525__auto__);
var G__23293 = (0);
seq__22899 = G__23290;
chunk__22900 = G__23291;
count__22901 = G__23292;
i__22902 = G__23293;
continue;
} else {
var vec__22912 = cljs.core.first(seq__22899__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22912,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null, v,k));


var G__23295 = cljs.core.next(seq__22899__$1);
var G__23296 = null;
var G__23297 = (0);
var G__23298 = (0);
seq__22899 = G__23295;
chunk__22900 = G__23296;
count__22901 = G__23297;
i__22902 = G__23298;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__22915 = (self__.obj[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val(G__22915,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22915;
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var ret = cljs_bean.core.goog$module$goog$object.get(self__.obj,(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k)),not_found);
var G__22916 = ret;
if(((self__.recursive_QMARK_) && ((!((ret === not_found)))))){
return cljs_bean.core.__GT_val(G__22916,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22916;
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
try{var result = cljs.core.volatile_BANG_(init);
cljs_bean.core.goog$module$goog$object.forEach(self__.obj,(function (v,k,___$2){
var r = result.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (function (){var G__22920 = result.cljs$core$IDeref$_deref$arity$1(null, );
var G__22921 = (self__.prop__GT_key.cljs$core$IFn$_invoke$arity$1 ? self__.prop__GT_key.cljs$core$IFn$_invoke$arity$1(k) : self__.prop__GT_key.call(null, k));
var G__22922 = (function (){var G__22925 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val(G__22925,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22925;
}
})();
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22920,G__22921,G__22922) : f.call(null, G__22920,G__22921,G__22922));
})());
if(cljs.core.reduced_QMARK_(r)){
throw r;
} else {
return null;
}
}));

return cljs.core.deref(result);
}catch (e22918){var x = e22918;
if(cljs.core.reduced_QMARK_(x)){
return cljs.core.deref(x);
} else {
throw x;
}
}}));

(cljs_bean.core.Bean.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
}));

(cljs_bean.core.Bean.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.__arr == null)){
(self__.__arr = cljs.core.js_keys(self__.obj));
} else {
}

return (new cljs_bean.core.BeanIterator(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.__arr,(0),coll__$1.cljs$core$ICounted$_count$arity$1(null, )));
}));

(cljs_bean.core.Bean.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(cljs_bean.core.Bean.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.Bean(self__.meta,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.__arr,self__.__cnt,self__.__hash));
}));

(cljs_bean.core.Bean.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.__cnt == null)){
if((self__.__arr == null)){
(self__.__arr = cljs.core.js_keys(self__.obj));
} else {
}

return (self__.__cnt = self__.__arr.length);
} else {
return self__.__cnt;
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
}));

(cljs_bean.core.Bean.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.TransientBean(true,cljs_bean.core.goog$module$goog$object.clone(self__.obj),self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.__cnt));
}));

(cljs_bean.core.Bean.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.Bean(self__.meta,({}),self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,[],(0),null));
}));

(cljs_bean.core.Bean.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core._reduce(coll__$1.cljs$core$ISeqable$_seq$arity$1(null, ),f);
}));

(cljs_bean.core.Bean.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$IKVReduce$_kv_reduce$arity$3(null, (function (r,k,v){
var G__22936 = r;
var G__22937 = (new cljs.core.MapEntry(k,v,null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22936,G__22937) : f.call(null, G__22936,G__22937));
}),start);
}));

(cljs_bean.core.Bean.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.Bean(self__.meta,(function (){var G__22938 = cljs_bean.core.goog$module$goog$object.clone(self__.obj);
delete G__22938[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))];

return G__22938;
})(),self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,null,null,null));
}));

(cljs_bean.core.Bean.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(cljs_bean.core.snapshot_QMARK_(k,v,self__.prop__GT_key,self__.recursive_QMARK_)){
return cljs.core._assoc(cljs.core.with_meta(cljs_bean.core.snapshot(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_),self__.meta),k,v);
} else {
return (new cljs_bean.core.Bean(self__.meta,(function (){var G__22939 = cljs_bean.core.goog$module$goog$object.clone(self__.obj);
(G__22939[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))] = (function (){var G__22940 = v;
if(self__.recursive_QMARK_){
return cljs_bean.core.unwrap(G__22940);
} else {
return G__22940;
}
})());

return G__22939;
})(),self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,null,null,null));
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return (!((coll__$1.cljs$core$ILookup$_lookup$arity$3(null, k,cljs_bean.core.lookup_sentinel) === cljs_bean.core.lookup_sentinel)));
}));

(cljs_bean.core.Bean.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.__arr == null)){
(self__.__arr = cljs.core.js_keys(self__.obj));
} else {
}

if((self__.__arr.length > (0))){
return (new cljs_bean.core.BeanSeq(self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.__arr,(0),null));
} else {
return null;
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.Bean(new_meta,self__.obj,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.recursive_QMARK_,self__.__arr,self__.__cnt,self__.__hash));
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentArrayMap_conj(coll__$1,entry);
}));

(cljs_bean.core.Bean.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__22945 = (arguments.length - (1));
switch (G__22945) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(cljs_bean.core.Bean.prototype.apply = (function (self__,args22896){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22896)));
}));

(cljs_bean.core.Bean.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
var G__22946 = (self__.obj[(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k))]);
if(self__.recursive_QMARK_){
return cljs_bean.core.__GT_val(G__22946,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22946;
}
}));

(cljs_bean.core.Bean.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _ = this;
var ret = cljs_bean.core.goog$module$goog$object.get(self__.obj,(self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1 ? self__.key__GT_prop.cljs$core$IFn$_invoke$arity$1(k) : self__.key__GT_prop.call(null, k)),not_found);
var G__22950 = ret;
if(((self__.recursive_QMARK_) && ((!((ret === not_found)))))){
return cljs_bean.core.__GT_val(G__22950,self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return G__22950;
}
}));

(cljs_bean.core.Bean.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),cljs.core.with_meta(new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__arr","__arr",2056204649,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__cnt","__cnt",1833584904,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs_bean.core.Bean.cljs$lang$type = true);

(cljs_bean.core.Bean.cljs$lang$ctorStr = "cljs-bean.core/Bean");

(cljs_bean.core.Bean.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/Bean");
}));

/**
 * Positional factory function for cljs-bean.core/Bean.
 */
cljs_bean.core.__GT_Bean = (function cljs_bean$core$__GT_Bean(meta,obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,__arr,__cnt,__hash){
return (new cljs_bean.core.Bean(meta,obj,prop__GT_key,key__GT_prop,transform,recursive_QMARK_,__arr,__cnt,__hash));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.ILookup}
*/
cljs_bean.core.TransientArrayVector = (function (editable_QMARK_,arr,prop__GT_key,key__GT_prop,transform){
this.editable_QMARK_ = editable_QMARK_;
this.arr = arr;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 275;
});
(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if((!(cljs_bean.core.compatible_value_QMARK_(o,true)))){
return cljs.core._conj_BANG_(cljs.core.transient$(cljs_bean.core.snapshot_arr(self__.arr)),o);
} else {
self__.arr.push(cljs_bean.core.unwrap(o));

return tcoll__$1;
}
} else {
throw (new Error("conj! after persistent!"));
}
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
(self__.editable_QMARK_ = false);

return (new cljs_bean.core.ArrayVector(null,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return cljs_bean.from.cljs.core.TransientVector_assoc_BANG_(tcoll__$1,key,val,"TransientArrayVector");
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if((!(cljs_bean.core.compatible_value_QMARK_(val,true)))){
return cljs.core._assoc_n_BANG_(cljs.core.transient$(cljs_bean.core.snapshot_arr(self__.arr)),n,val);
} else {
if(((((0) <= n)) && ((n < self__.arr.length)))){
(self__.arr[n] = cljs_bean.core.unwrap(val));

return tcoll__$1;
} else {
if((n === self__.arr.length)){
return tcoll__$1.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null, val);
} else {
throw (new Error(["Index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," out of bounds for TransientArrayVector of length",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.arr.length)].join('')));

}
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.editable_QMARK_){
if((self__.arr.length === (0))){
throw (new Error("Can't pop empty vector"));
} else {
(self__.arr = self__.arr.slice((0),(self__.arr.length - (1))));

return tcoll__$1;
}
} else {
throw (new Error("pop! after persistent!"));
}
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
return self__.arr.length;
} else {
throw (new Error("count after persistent!"));
}
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if(self__.editable_QMARK_){
return cljs_bean.core.__GT_val((self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
throw (new Error("nth after persistent!"));
}
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return coll__$1.cljs$core$IIndexed$_nth$arity$2(null, n);
} else {
return not_found;
}
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return coll__$1.cljs$core$IIndexed$_nth$arity$3(null, k,not_found);
} else {
return not_found;
}
}));

(cljs_bean.core.TransientArrayVector.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__23016 = (arguments.length - (1));
switch (G__23016) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(cljs_bean.core.TransientArrayVector.prototype.apply = (function (self__,args22970){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args22970)));
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null, k);
}));

(cljs_bean.core.TransientArrayVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null, k,not_found);
}));

(cljs_bean.core.TransientArrayVector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"editable?","editable?",-164945806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null)], null);
}));

(cljs_bean.core.TransientArrayVector.cljs$lang$type = true);

(cljs_bean.core.TransientArrayVector.cljs$lang$ctorStr = "cljs-bean.core/TransientArrayVector");

(cljs_bean.core.TransientArrayVector.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/TransientArrayVector");
}));

/**
 * Positional factory function for cljs-bean.core/TransientArrayVector.
 */
cljs_bean.core.__GT_TransientArrayVector = (function cljs_bean$core$__GT_TransientArrayVector(editable_QMARK_,arr,prop__GT_key,key__GT_prop,transform){
return (new cljs_bean.core.TransientArrayVector(editable_QMARK_,arr,prop__GT_key,key__GT_prop,transform));
});


/**
* @constructor
*/
cljs_bean.core.ArrayVectorIterator = (function (prop__GT_key,key__GT_prop,transform,arr,i,cnt){
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.arr = arr;
this.i = i;
this.cnt = cnt;
});
(cljs_bean.core.ArrayVectorIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
}));

(cljs_bean.core.ArrayVectorIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = cljs_bean.core.__GT_val((self__.arr[self__.i]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
(self__.i = (self__.i + (1)));

return ret;
}));

(cljs_bean.core.ArrayVectorIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),new cljs.core.Symbol(null,"arr","arr",2115492975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null)], null);
}));

(cljs_bean.core.ArrayVectorIterator.cljs$lang$type = true);

(cljs_bean.core.ArrayVectorIterator.cljs$lang$ctorStr = "cljs-bean.core/ArrayVectorIterator");

(cljs_bean.core.ArrayVectorIterator.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/ArrayVectorIterator");
}));

/**
 * Positional factory function for cljs-bean.core/ArrayVectorIterator.
 */
cljs_bean.core.__GT_ArrayVectorIterator = (function cljs_bean$core$__GT_ArrayVectorIterator(prop__GT_key,key__GT_prop,transform,arr,i,cnt){
return (new cljs_bean.core.ArrayVectorIterator(prop__GT_key,key__GT_prop,transform,arr,i,cnt));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.ArrayVectorSeq = (function (prop__GT_key,key__GT_prop,transform,arr,i,meta){
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.arr = arr;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2179858686;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
(cljs_bean.core.ArrayVectorSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null, other);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.indexOf = (function() {
var G__23335 = null;
var G__23335__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(coll,x,(0));
});
var G__23335__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(coll,x,start);
});
G__23335 = function(x,start){
switch(arguments.length){
case 1:
return G__23335__1.call(this,x);
case 2:
return G__23335__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23335.cljs$core$IFn$_invoke$arity$1 = G__23335__1;
G__23335.cljs$core$IFn$_invoke$arity$2 = G__23335__2;
return G__23335;
})()
);

(cljs_bean.core.ArrayVectorSeq.prototype.lastIndexOf = (function() {
var G__23338 = null;
var G__23338__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(coll,x,cljs.core.count(coll));
});
var G__23338__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(coll,x,start);
});
G__23338 = function(x,start){
switch(arguments.length){
case 1:
return G__23338__1.call(this,x);
case 2:
return G__23338__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23338.cljs$core$IFn$_invoke$arity$1 = G__23338__1;
G__23338.cljs$core$IFn$_invoke$arity$2 = G__23338__2;
return G__23338;
})()
);

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.__GT_val((self__.arr[i__$1]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
throw (new Error("Index out of bounds"));
}
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
var i__$1 = (n + self__.i);
if(((((0) <= i__$1)) && ((i__$1 < self__.arr.length)))){
return cljs_bean.core.__GT_val((self__.arr[i__$1]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return not_found;
}
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,self__.i,self__.meta));
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,(self__.i + (1)),null));
} else {
return null;
}
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__5087__auto__ = (0);
var y__5088__auto__ = (self__.arr.length - self__.i);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.equiv_sequential(coll__$1,other);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.List.EMPTY;
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs_bean.core.__GT_val((self__.arr[self__.i]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,(self__.i + (1)),null));
} else {
return cljs.core.List.EMPTY;
}
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,self__.i,new_meta));
}
}));

(cljs_bean.core.ArrayVectorSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
}));

(cljs_bean.core.ArrayVectorSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cljs_bean.core.ArrayVectorSeq.cljs$lang$type = true);

(cljs_bean.core.ArrayVectorSeq.cljs$lang$ctorStr = "cljs-bean.core/ArrayVectorSeq");

(cljs_bean.core.ArrayVectorSeq.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/ArrayVectorSeq");
}));

/**
 * Positional factory function for cljs-bean.core/ArrayVectorSeq.
 */
cljs_bean.core.__GT_ArrayVectorSeq = (function cljs_bean$core$__GT_ArrayVectorSeq(prop__GT_key,key__GT_prop,transform,arr,i,meta){
return (new cljs_bean.core.ArrayVectorSeq(prop__GT_key,key__GT_prop,transform,arr,i,meta));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
cljs_bean.core.ArrayVector = (function (meta,prop__GT_key,key__GT_prop,transform,arr,__hash){
this.meta = meta;
this.prop__GT_key = prop__GT_key;
this.key__GT_prop = key__GT_prop;
this.transform = transform;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315150111;
this.cljs$lang$protocol_mask$partition1$ = 141316;
});
(cljs_bean.core.ArrayVector.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_bean.core.ArrayVector.prototype.cljs$core$IFind$_find$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return (new cljs.core.MapEntry(n,cljs_bean.core.__GT_val((self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop,self__.transform),null));
} else {
return null;
}
}));

(cljs_bean.core.ArrayVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(cljs_bean.core.ArrayVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null, other);
}));

(cljs_bean.core.ArrayVector.prototype.indexOf = (function() {
var G__23351 = null;
var G__23351__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(coll,x,(0));
});
var G__23351__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(coll,x,start);
});
G__23351 = function(x,start){
switch(arguments.length){
case 1:
return G__23351__1.call(this,x);
case 2:
return G__23351__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23351.cljs$core$IFn$_invoke$arity$1 = G__23351__1;
G__23351.cljs$core$IFn$_invoke$arity$2 = G__23351__2;
return G__23351;
})()
);

(cljs_bean.core.ArrayVector.prototype.lastIndexOf = (function() {
var G__23353 = null;
var G__23353__1 = (function (x){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2(coll,x);
});
var G__23353__2 = (function (x,start){
var self__ = this;
var coll = this;
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(coll,x,start);
});
G__23353 = function(x,start){
switch(arguments.length){
case 1:
return G__23353__1.call(this,x);
case 2:
return G__23353__2.call(this,x,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23353.cljs$core$IFn$_invoke$arity$1 = G__23353__1;
G__23353.cljs$core$IFn$_invoke$arity$2 = G__23353__2;
return G__23353;
})()
);

(cljs_bean.core.ArrayVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_lookup(coll__$1,k,not_found);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.arr.length)){
var len = self__.arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__23244 = init__$2;
var G__23245 = (j + i);
var G__23246 = cljs_bean.core.__GT_val((self__.arr[j]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23244,G__23245,G__23246) : f.call(null, G__23244,G__23245,G__23246));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__23355 = (j + (1));
var G__23356 = init__$3;
j = G__23355;
init__$2 = G__23356;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return cljs.core.deref(init__$2);
} else {
var G__23360 = (i + len);
var G__23361 = init__$2;
i = G__23360;
init__$1 = G__23361;
continue;
}
} else {
return init__$1;
}
break;
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return cljs_bean.core.__GT_val((self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
throw (new Error(["No item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," in vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.arr.length)].join('')));
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
return cljs_bean.core.__GT_val((self__.arr[n]),self__.prop__GT_key,self__.key__GT_prop,self__.transform);
} else {
return not_found;
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if(((((0) <= n)) && ((n < self__.arr.length)))){
if((!(cljs_bean.core.compatible_value_QMARK_(val,true)))){
return cljs.core._assoc_n(cljs_bean.core.snapshot_arr(self__.arr),n,val);
} else {
var new_arr = cljs.core.aclone(self__.arr);
(new_arr[n] = cljs_bean.core.unwrap(val));

return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,self__.transform,new_arr,null));
}
} else {
if((n === self__.arr.length)){
return coll__$1.cljs$core$ICollection$_conj$arity$2(null, val);
} else {
throw (new Error(["Index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," out of bounds  [0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.arr.length),"]"].join('')));

}
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.ArrayVectorIterator(self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,(0),self__.arr.length));
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,self__.__hash));
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.arr.length;
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length > (0))){
return coll__$1.cljs$core$IIndexed$_nth$arity$2(null, (self__.arr.length - (1)));
} else {
return null;
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.arr.length)){
return coll__$1.cljs$core$IEmptyableCollection$_empty$arity$1(null, );
} else {
var new_arr = cljs.core.aclone(self__.arr);
return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,self__.transform,new_arr.slice((0),(new_arr.length - (1))),null));

}
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.arr.length - (1)),null));
} else {
return null;
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_equiv(coll__$1,other,cljs_bean.core.ArrayVector,self__.arr.length);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs_bean.core.TransientArrayVector(true,cljs.core.aclone(self__.arr),self__.prop__GT_key,self__.key__GT_prop,self__.transform));
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,self__.transform,[],null));
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(v__$1,f,init);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_assoc(coll__$1,k,v);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs_bean.from.cljs.core.PersistentVector_contains_key_QMARK_(coll__$1,k,self__.arr.length);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.arr.length > (0))){
return (new cljs_bean.core.ArrayVectorSeq(self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,(0),null));
} else {
return null;
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
if((new_meta === self__.meta)){
return coll__$1;
} else {
return (new cljs_bean.core.ArrayVector(new_meta,self__.prop__GT_key,self__.key__GT_prop,self__.transform,self__.arr,self__.__hash));
}
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((!(cljs_bean.core.compatible_value_QMARK_(o,true)))){
return cljs.core._conj(cljs_bean.core.snapshot_arr(self__.arr),o);
} else {
var new_arr = cljs.core.aclone(self__.arr);
(new_arr[new_arr.length] = cljs_bean.core.unwrap(o));

return (new cljs_bean.core.ArrayVector(self__.meta,self__.prop__GT_key,self__.key__GT_prop,self__.transform,new_arr,null));
}
}));

(cljs_bean.core.ArrayVector.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__23247 = (arguments.length - (1));
switch (G__23247) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(cljs_bean.core.ArrayVector.prototype.apply = (function (self__,args23243){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23243)));
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null, k);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null, k,not_found);
}));

(cljs_bean.core.ArrayVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var self__ = this;
var x__$1 = this;
if(cljs.core.vector_QMARK_(y)){
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')));
}
}));

(cljs_bean.core.ArrayVector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"prop->key","prop->key",342816281,null),new cljs.core.Symbol(null,"key->prop","key->prop",612078996,null),new cljs.core.Symbol(null,"transform","transform",-1273134005,null),new cljs.core.Symbol(null,"arr","arr",2115492975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs_bean.core.ArrayVector.cljs$lang$type = true);

(cljs_bean.core.ArrayVector.cljs$lang$ctorStr = "cljs-bean.core/ArrayVector");

(cljs_bean.core.ArrayVector.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs-bean.core/ArrayVector");
}));

/**
 * Positional factory function for cljs-bean.core/ArrayVector.
 */
cljs_bean.core.__GT_ArrayVector = (function cljs_bean$core$__GT_ArrayVector(meta,prop__GT_key,key__GT_prop,transform,arr,__hash){
return (new cljs_bean.core.ArrayVector(meta,prop__GT_key,key__GT_prop,transform,arr,__hash));
});

cljs_bean.core.default_key__GT_prop = (function cljs_bean$core$default_key__GT_prop(x){
if((x instanceof cljs.core.Keyword)){
return x.fqn;
} else {
return null;
}
});
/**
 * Takes a JavaScript object and returns a read-only implementation of the map
 *   abstraction backed by the object.
 * 
 *   By default, bean produces beans that keywordize the keys. Supply
 *   :keywordize-keys false to suppress this behavior. You can alternatively
 *   supply :prop->key and :key->prop with functions that control the mapping
 *   between properties and keys.
 * 
 *   Supply :recursive true to create a bean which recursively converts
 *   JavaScript object values to beans and JavaScript arrays into vectors.
 * 
 *   Supply :transform and a function of one argument to transform values being
 *   converted from JavaScript to ClojureScript. This function should return nil
 *   if no conversion is to be performed, thus allowing default logic to be applied.
 * 
 *   Calling (bean) produces an empty bean.
 */
cljs_bean.core.bean = (function cljs_bean$core$bean(var_args){
var G__23251 = arguments.length;
switch (G__23251) {
case 0:
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___23394 = arguments.length;
var i__5727__auto___23395 = (0);
while(true){
if((i__5727__auto___23395 < len__5726__auto___23394)){
args_arr__5751__auto__.push((arguments[i__5727__auto___23395]));

var G__23396 = (i__5727__auto___23395 + (1));
i__5727__auto___23395 = G__23396;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new cljs_bean.core.Bean(null,({}),cljs.core.keyword,cljs_bean.core.default_key__GT_prop,null,false,[],(0),null));
}));

(cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new cljs_bean.core.Bean(null,x,cljs.core.keyword,cljs_bean.core.default_key__GT_prop,null,false,null,null,null));
}));

(cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
var map__23252 = opts;
var map__23252__$1 = cljs.core.__destructure_map(map__23252);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
var prop__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246));
var key__GT_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var recursive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,new cljs.core.Keyword(null,"recursive","recursive",718885872));
if(keywordize_keys === false){
return (new cljs_bean.core.Bean(null,x,cljs.core.identity,cljs.core.identity,transform,cljs.core.boolean$(recursive),null,null,null));
} else {
if((((!((prop__GT_key == null)))) && ((!((key__GT_prop == null)))))){
return (new cljs_bean.core.Bean(null,x,prop__GT_key,key__GT_prop,transform,cljs.core.boolean$(recursive),null,null,null));
} else {
return (new cljs_bean.core.Bean(null,x,cljs.core.keyword,cljs_bean.core.default_key__GT_prop,transform,cljs.core.boolean$(recursive),null,null,null));

}
}
}));

/** @this {Function} */
(cljs_bean.core.bean.cljs$lang$applyTo = (function (seq23249){
var G__23250 = cljs.core.first(seq23249);
var seq23249__$1 = cljs.core.next(seq23249);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23250,seq23249__$1);
}));

(cljs_bean.core.bean.cljs$lang$maxFixedArity = (1));

/**
 * Returns true if x is a bean.
 */
cljs_bean.core.bean_QMARK_ = (function cljs_bean$core$bean_QMARK_(x){
return (x instanceof cljs_bean.core.Bean);
});
/**
 * Takes a bean and returns a JavaScript object.
 */
cljs_bean.core.object = (function cljs_bean$core$object(b){
return b.obj;
});
/**
 * Recursively converts JavaScript values to ClojureScript.
 * 
 *   JavaScript objects are converted to beans with keywords for keys.
 * 
 *   JavaScript arrays are converted to read-only implementations of the vector
 *   abstraction, backed by the supplied array.
 * 
 *   By default, ->clj produces values that keywordize the keys. Supply
 *   :keywordize-keys false to suppress this behavior. You can alternatively
 *   supply :prop->key and :key->prop with functions that control the mapping
 *   between properties and keys.
 * 
 *   Supply :transform and a function of one argument to transform values being
 *   converted from JavaScript to ClojureScript. This function should return nil
 *   if no conversion is to be performed, thus allowing default logic to be applied.
 */
cljs_bean.core.__GT_clj = (function cljs_bean$core$__GT_clj(var_args){
var G__23256 = arguments.length;
switch (G__23256) {
case 1:
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___23406 = arguments.length;
var i__5727__auto___23407 = (0);
while(true){
if((i__5727__auto___23407 < len__5726__auto___23406)){
args_arr__5751__auto__.push((arguments[i__5727__auto___23407]));

var G__23410 = (i__5727__auto___23407 + (1));
i__5727__auto___23407 = G__23410;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs_bean.core.__GT_val(x,cljs.core.keyword,cljs_bean.core.default_key__GT_prop,null);
}));

(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
var map__23257 = opts;
var map__23257__$1 = cljs.core.__destructure_map(map__23257);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23257__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
var prop__GT_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23257__$1,new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246));
var key__GT_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23257__$1,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23257__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
if(keywordize_keys === false){
return cljs_bean.core.__GT_val(x,cljs.core.identity,cljs.core.identity,transform);
} else {
if((((!((prop__GT_key == null)))) && ((!((key__GT_prop == null)))))){
return cljs_bean.core.__GT_val(x,prop__GT_key,key__GT_prop,transform);
} else {
return cljs_bean.core.__GT_val(x,cljs.core.keyword,cljs_bean.core.default_key__GT_prop,transform);

}
}
}));

/** @this {Function} */
(cljs_bean.core.__GT_clj.cljs$lang$applyTo = (function (seq23254){
var G__23255 = cljs.core.first(seq23254);
var seq23254__$1 = cljs.core.next(seq23254);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23255,seq23254__$1);
}));

(cljs_bean.core.__GT_clj.cljs$lang$maxFixedArity = (1));

/**
 * Recursively converts ClojureScript values to JavaScript.
 * 
 *   Where possible, directly returns the backing objects and arrays for values
 *   produced using ->clj and bean.
 * 
 *   Otherwise delegates to clj->js to perform the conversion, converting keyword
 *   keys using their qualified names. You can alternatively supply :key->prop with
 *   a function that controls the mapping from keys to properties.
 */
cljs_bean.core.__GT_js = (function cljs_bean$core$__GT_js(var_args){
var G__23261 = arguments.length;
switch (G__23261) {
case 1:
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___23417 = arguments.length;
var i__5727__auto___23418 = (0);
while(true){
if((i__5727__auto___23418 < len__5726__auto___23417)){
args_arr__5751__auto__.push((arguments[i__5727__auto___23418]));

var G__23420 = (i__5727__auto___23418 + (1));
i__5727__auto___23418 = G__23420;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x instanceof cljs_bean.core.Bean)){
return x.obj;
} else {
if((x instanceof cljs_bean.core.ArrayVector)){
return x.arr;
} else {
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs_bean.core.default_key__GT_prop], 0));

}
}
}));

(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
if((x instanceof cljs_bean.core.Bean)){
return x.obj;
} else {
if((x instanceof cljs_bean.core.ArrayVector)){
return x.arr;
} else {
var map__23262 = opts;
var map__23262__$1 = cljs.core.__destructure_map(map__23262);
var key__GT_prop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23262__$1,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531),cljs_bean.core.default_key__GT_prop);
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),key__GT_prop], 0));

}
}
}));

/** @this {Function} */
(cljs_bean.core.__GT_js.cljs$lang$applyTo = (function (seq23259){
var G__23260 = cljs.core.first(seq23259);
var seq23259__$1 = cljs.core.next(seq23259);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23260,seq23259__$1);
}));

(cljs_bean.core.__GT_js.cljs$lang$maxFixedArity = (1));

/**
 * Set empty map and array to Bean and ArrayVector. Useful for testing.
 */
cljs_bean.core.set_empty_colls_BANG_ = (function cljs_bean$core$set_empty_colls_BANG_(){
(cljs.core.PersistentArrayMap.EMPTY = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(({})));

(cljs.core.PersistentVector.EMPTY = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1([]));

return null;
});

//# sourceMappingURL=cljs_bean.core.js.map
