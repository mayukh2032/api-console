goog.provide("cljs.reader"),goog.require("cljs.core"),goog.require("goog.string"),goog.require("goog.string.StringBuffer"),cljs.reader.PushbackReader=function(){},cljs.reader.read_char=function(r){if(null!=r&&null!=r.cljs$reader$PushbackReader$read_char$arity$1)return r.cljs$reader$PushbackReader$read_char$arity$1(r);var e=null==r?null:r,c=cljs.reader.read_char[goog.typeOf(e)];if(null!=c)return c.cljs$core$IFn$_invoke$arity$1?c.cljs$core$IFn$_invoke$arity$1(r):c.call(null,r);var a=cljs.reader.read_char._;if(null!=a)return a.cljs$core$IFn$_invoke$arity$1?a.cljs$core$IFn$_invoke$arity$1(r):a.call(null,r);throw cljs.core.missing_protocol("PushbackReader.read-char",r)},cljs.reader.unread=function(r,e){if(null!=r&&null!=r.cljs$reader$PushbackReader$unread$arity$2)return r.cljs$reader$PushbackReader$unread$arity$2(r,e);var c=null==r?null:r,a=cljs.reader.unread[goog.typeOf(c)];if(null!=a)return a.cljs$core$IFn$_invoke$arity$2?a.cljs$core$IFn$_invoke$arity$2(r,e):a.call(null,r,e);var l=cljs.reader.unread._;if(null!=l)return l.cljs$core$IFn$_invoke$arity$2?l.cljs$core$IFn$_invoke$arity$2(r,e):l.call(null,r,e);throw cljs.core.missing_protocol("PushbackReader.unread",r)},cljs.reader.StringPushbackReader=function(r,e,c){this.s=r,this.buffer=e,this.idx=c},cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$=!0,cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1=function(r){var e=this;return 0===e.buffer.length?(e.idx=e.idx+1,e.s[e.idx]):e.buffer.pop()},cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2=function(r,e){var c=this;return c.buffer.push(e)},cljs.reader.StringPushbackReader.getBasis=function(){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$sym$s,cljs.core.cst$sym$buffer,cljs.core.with_meta(cljs.core.cst$sym$idx,new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$mutable,!0],null))],null)},cljs.reader.StringPushbackReader.cljs$lang$type=!0,cljs.reader.StringPushbackReader.cljs$lang$ctorStr="cljs.reader/StringPushbackReader",cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter=function(r,e,c){return cljs.core._write(e,"cljs.reader/StringPushbackReader")},cljs.reader.__GT_StringPushbackReader=function(r,e,c){return new cljs.reader.StringPushbackReader(r,e,c)},cljs.reader.push_back_reader=function(r){return new cljs.reader.StringPushbackReader(r,[],-1)},cljs.reader.whitespace_QMARK_=function(r){var e=goog.string.isBreakingWhitespace(r);return cljs.core.truth_(e)?e:","===r},cljs.reader.numeric_QMARK_=function(r){return goog.string.isNumeric(r)},cljs.reader.comment_prefix_QMARK_=function(r){return";"===r},cljs.reader.number_literal_QMARK_=function(r,e){return cljs.reader.numeric_QMARK_(e)||("+"===e||"-"===e)&&cljs.reader.numeric_QMARK_(function(){var e=cljs.reader.read_char(r);return cljs.reader.unread(r,e),e}())},cljs.reader.reader_error=function(r){for(var e=[],c=arguments.length,a=0;;){if(!(a<c))break;e.push(arguments[a]);var l=a+1;a=l}var n=1<e.length?new cljs.core.IndexedSeq(e.slice(1),0,null):null;return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(arguments[0],n)},cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic=function(r,e){throw new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,e))},cljs.reader.reader_error.cljs$lang$maxFixedArity=1,cljs.reader.reader_error.cljs$lang$applyTo=function(r){var e=cljs.core.first(r),c=cljs.core.next(r);return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(e,c)},cljs.reader.macro_terminating_QMARK_=function(r){var e=!("#"===r);if(e){var c=!("'"===r);if(c){var a=!(":"===r);return a?cljs.reader.macros.cljs$core$IFn$_invoke$arity$1?cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(r):cljs.reader.macros.call(null,r):a}return c}return e},cljs.reader.read_token=function(r,e){for(var c=new goog.string.StringBuffer(e),a=cljs.reader.read_char(r);;){if(null==a||cljs.reader.whitespace_QMARK_(a)||cljs.reader.macro_terminating_QMARK_(a))return cljs.reader.unread(r,a),c.toString();var l=function(){return c.append(a),c}(),n=cljs.reader.read_char(r);c=l,a=n}},cljs.reader.skip_line=function(r,e){for(;;){var c=cljs.reader.read_char(r);if("\n"===c||"\r"===c||null==c)return r}},cljs.reader.int_pattern=cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"),cljs.reader.ratio_pattern=cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$"),cljs.reader.float_pattern=cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"),cljs.reader.symbol_pattern=cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$"),cljs.reader.re_matches_STAR_=function(r,e){var c=r.exec(e);return null!=c&&c[0]===e?1===c.length?c[0]:c:null},cljs.reader.match_int=function(r){var e=cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,r),c=e[2],a=cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"")?null:c;if(null!=a)return 0;var l=cljs.core.truth_(e[3])?[e[3],10]:cljs.core.truth_(e[4])?[e[4],16]:cljs.core.truth_(e[5])?[e[5],8]:cljs.core.truth_(e[6])?[e[7],function(){var r=e[6],c=10;return parseInt(r,c)}()]:[null,null],n=l[0],s=l[1];if(null==n)return null;var t=parseInt(n,s);return"-"===e[1]?-t:t},cljs.reader.match_ratio=function(r){var e=cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,r),c=e[1],a=e[2];return parseInt(c,10)/parseInt(a,10)},cljs.reader.match_float=function(r){return parseFloat(r)},cljs.reader.match_number=function(r){return cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,r))?cljs.reader.match_int(r):cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,r))?cljs.reader.match_ratio(r):cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,r))?cljs.reader.match_float(r):null},cljs.reader.escape_char_map=function(r){return"t"===r?"\t":"r"===r?"\r":"n"===r?"\n":"\\"===r?"\\":'"'===r?'"':"b"===r?"\b":"f"===r?"\f":null},cljs.reader.read_2_chars=function(r){return new goog.string.StringBuffer(cljs.reader.read_char(r),cljs.reader.read_char(r)).toString()},cljs.reader.read_4_chars=function(r){return new goog.string.StringBuffer(cljs.reader.read_char(r),cljs.reader.read_char(r),cljs.reader.read_char(r),cljs.reader.read_char(r)).toString()},cljs.reader.unicode_2_pattern=cljs.core.re_pattern("^[0-9A-Fa-f]{2}$"),cljs.reader.unicode_4_pattern=cljs.core.re_pattern("^[0-9A-Fa-f]{4}$"),cljs.reader.validate_unicode_escape=function(r,e,c,a){return cljs.core.truth_(cljs.core.re_matches(r,a))?a:cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.array_seq(["Unexpected unicode escape \\",c,a],0))},cljs.reader.make_unicode_char=function(r){var e=parseInt(r,16);return String.fromCharCode(e)},cljs.reader.escape_char=function(r,e){var c=cljs.reader.read_char(e),a=cljs.reader.escape_char_map(c);return cljs.core.truth_(a)?a:"x"===c?cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,e,c,cljs.reader.read_2_chars(e))):"u"===c?cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,e,c,cljs.reader.read_4_chars(e))):cljs.reader.numeric_QMARK_(c)?String.fromCharCode(c):cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.array_seq(["Unexpected unicode escape \\",c],0))},cljs.reader.read_past=function(r,e){for(var c=cljs.reader.read_char(e);;){if(!cljs.core.truth_(r.cljs$core$IFn$_invoke$arity$1?r.cljs$core$IFn$_invoke$arity$1(c):r.call(null,c)))return c;var a=cljs.reader.read_char(e);c=a}},cljs.reader.read_delimited_list=function(r,e,c){for(var a=cljs.core.transient$(cljs.core.PersistentVector.EMPTY);;){var l=cljs.reader.read_past(cljs.reader.whitespace_QMARK_,e);if(cljs.core.truth_(l)||cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.array_seq(["EOF while reading"],0)),r===l)return cljs.core.persistent_BANG_(a);var n=cljs.reader.macros.cljs$core$IFn$_invoke$arity$1?cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(l):cljs.reader.macros.call(null,l);if(cljs.core.truth_(n)){var s=n,t=s.cljs$core$IFn$_invoke$arity$2?s.cljs$core$IFn$_invoke$arity$2(e,l):s.call(null,e,l),o=t===e?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,t);a=o}else{cljs.reader.unread(e,l);var i=cljs.reader.read.cljs$core$IFn$_invoke$arity$4?cljs.reader.read.cljs$core$IFn$_invoke$arity$4(e,!0,null,c):cljs.reader.read.call(null,e,!0,null,c),$=i===e?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,i);a=$}}},cljs.reader.not_implemented=function(r,e){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Reader for ",e," not implemented yet"],0))},cljs.reader.read_dispatch=function(r,e){var c=cljs.reader.read_char(r),a=cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1?cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(c):cljs.reader.dispatch_macros.call(null,c);if(cljs.core.truth_(a))return a.cljs$core$IFn$_invoke$arity$2?a.cljs$core$IFn$_invoke$arity$2(r,e):a.call(null,r,e);var l=cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2?cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(r,c):cljs.reader.maybe_read_tagged_type.call(null,r,c);if(cljs.core.truth_(l)){var n=l;return n}return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["No dispatch macro for ",c],0))},cljs.reader.read_unmatched_delimiter=function(r,e){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Unmatched delimiter ",e],0))},cljs.reader.read_list=function(r,e){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",r,!0))},cljs.reader.read_comment=cljs.reader.skip_line,cljs.reader.read_vector=function(r,e){return cljs.reader.read_delimited_list("]",r,!0)},cljs.reader.read_map=function(r,e){var c=cljs.reader.read_delimited_list("}",r,!0);return cljs.core.odd_QMARK_(cljs.core.count(c))&&cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Map literal must contain an even number of forms"],0)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,c)},cljs.reader.read_number=function(r,e){for(var c=new goog.string.StringBuffer(e),a=cljs.reader.read_char(r);;){if(cljs.core.truth_(function(){var r=null==a;if(r)return r;var e=cljs.reader.whitespace_QMARK_(a);return e?e:cljs.reader.macros.cljs$core$IFn$_invoke$arity$1?cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(a):cljs.reader.macros.call(null,a)}())){cljs.reader.unread(r,a);var l=c.toString(),n=cljs.reader.match_number(l);return cljs.core.truth_(n)?n:cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Invalid number format [",l,"]"],0))}var s=function(){return c.append(a),c}(),t=cljs.reader.read_char(r);c=s,a=t}},cljs.reader.read_string_STAR_=function(r,e){for(var c=new goog.string.StringBuffer,a=cljs.reader.read_char(r);;){if(null==a)return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["EOF while reading"],0));if("\\"!==a){if('"'===a)return c.toString();var l=function(){return c.append(a),c}(),n=cljs.reader.read_char(r);c=l,a=n}else{var s=function(){return c.append(cljs.reader.escape_char(c,r)),c}(),t=cljs.reader.read_char(r);c=s,a=t}}},cljs.reader.read_raw_string_STAR_=function(r,e){for(var c=new goog.string.StringBuffer,a=cljs.reader.read_char(r);;){if(null==a)return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["EOF while reading"],0));if("\\"!==a){if('"'===a)return c.toString();var l=function(){var r=c;return r.append(a),r}(),n=cljs.reader.read_char(r);c=l,a=n}else{c.append(a);var s=cljs.reader.read_char(r);if(null==s)return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["EOF while reading"],0));var t=function(){var r=c;return r.append(s),r}(),o=cljs.reader.read_char(r);c=t,a=o}}},cljs.reader.special_symbols=function(r,e){return"nil"===r?null:"true"===r||"false"!==r&&("/"===r?cljs.core.cst$sym$_SLASH_:e)},cljs.reader.read_symbol=function(r,e){var c=cljs.reader.read_token(r,e);return cljs.core.truth_(function(){var r=goog.string.contains(c,"/");return cljs.core.truth_(r)?!(1===c.length):r}())?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(c,0,c.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(c,c.indexOf("/")+1,c.length)):cljs.reader.special_symbols(c,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(c))},cljs.reader.read_literal=function(r,e){var c=cljs.reader.read_token(r,e),a=cljs.core.subs.cljs$core$IFn$_invoke$arity$2(c,1);return 1===a.length?a:"tab"===a?"\t":"return"===a?"\r":"newline"===a?"\n":"space"===a?" ":"backspace"===a?"\b":"formfeed"===a?"\f":"u"===a.charAt(0)?cljs.reader.make_unicode_char(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(a,1)):"o"===a.charAt(0)?cljs.reader.not_implemented(r,c):cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Unknown character literal: ",c],0))},cljs.reader.read_keyword=function(r,e){var c=cljs.reader.read_token(r,cljs.reader.read_char(r)),a=cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,c),l=a[0],n=a[1],s=a[2];return void 0!==n&&":/"===n.substring(n.length-2,n.length)||":"===s[s.length-1]||l.indexOf("::",1)!==-1?cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Invalid token: ",l],0)):null!=n&&n.length>0?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n.substring(0,n.indexOf("/")),s):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(l)},cljs.reader.desugar_meta=function(r){return r instanceof cljs.core.Symbol?new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$tag,r],null):"string"==typeof r?new cljs.core.PersistentArrayMap(null,1,[cljs.core.cst$kw$tag,r],null):r instanceof cljs.core.Keyword?cljs.core.PersistentArrayMap.fromArray([r,!0],!0,!1):r},cljs.reader.wrapping_reader=function(r){return function(e,c){var a=r;return cljs.core._conj(function(){var r=cljs.reader.read.cljs$core$IFn$_invoke$arity$4?cljs.reader.read.cljs$core$IFn$_invoke$arity$4(e,!0,null,!0):cljs.reader.read.call(null,e,!0,null,!0);return cljs.core._conj(cljs.core.List.EMPTY,r)}(),a)}},cljs.reader.throwing_reader=function(r){return function(e,c){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.array_seq([r],0))}},cljs.reader.read_meta=function(r,e){var c=cljs.reader.desugar_meta(cljs.reader.read.cljs$core$IFn$_invoke$arity$4?cljs.reader.read.cljs$core$IFn$_invoke$arity$4(r,!0,null,!0):cljs.reader.read.call(null,r,!0,null,!0));cljs.core.map_QMARK_(c)||cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"],0));var a=cljs.reader.read.cljs$core$IFn$_invoke$arity$4?cljs.reader.read.cljs$core$IFn$_invoke$arity$4(r,!0,null,!0):cljs.reader.read.call(null,r,!0,null,!0);return(null!=a?!!(262144&a.cljs$lang$protocol_mask$partition0$||a.cljs$core$IWithMeta$)||!a.cljs$lang$protocol_mask$partition0$&&cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,a):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,a))?cljs.core.with_meta(a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(a),c],0))):cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"],0))},cljs.reader.read_set=function(r,e){return cljs.core.set(cljs.reader.read_delimited_list("}",r,!0))},cljs.reader.read_regex=function(r,e){return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(r,e))},cljs.reader.read_discard=function(r,e){return cljs.reader.read.cljs$core$IFn$_invoke$arity$4?cljs.reader.read.cljs$core$IFn$_invoke$arity$4(r,!0,null,!0):cljs.reader.read.call(null,r,!0,null,!0),r},cljs.reader.macros=function(r){return'"'===r?cljs.reader.read_string_STAR_:":"===r?cljs.reader.read_keyword:";"===r?cljs.reader.read_comment:"'"===r?cljs.reader.wrapping_reader(cljs.core.cst$sym$quote):"@"===r?cljs.reader.wrapping_reader(cljs.core.cst$sym$deref):"^"===r?cljs.reader.read_meta:"`"===r?cljs.reader.not_implemented:"~"===r?cljs.reader.not_implemented:"("===r?cljs.reader.read_list:")"===r?cljs.reader.read_unmatched_delimiter:"["===r?cljs.reader.read_vector:"]"===r?cljs.reader.read_unmatched_delimiter:"{"===r?cljs.reader.read_map:"}"===r?cljs.reader.read_unmatched_delimiter:"\\"===r?cljs.reader.read_literal:"#"===r?cljs.reader.read_dispatch:null},cljs.reader.dispatch_macros=function(r){return"{"===r?cljs.reader.read_set:"<"===r?cljs.reader.throwing_reader("Unreadable form"):'"'===r?cljs.reader.read_regex:"!"===r?cljs.reader.read_comment:"_"===r?cljs.reader.read_discard:null},cljs.reader.read=function(r,e,c,a){for(;;){var l=cljs.reader.read_char(r);if(null==l)return cljs.core.truth_(e)?cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["EOF while reading"],0)):c;if(cljs.reader.whitespace_QMARK_(l)){var n=r,s=e,t=c,o=a;r=n,e=s,c=t,a=o}else if(cljs.reader.comment_prefix_QMARK_(l)){var i=cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2?cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(r,l):cljs.reader.read_comment.call(null,r,l),$=e,d=c,_=a;r=i,e=$,c=d,a=_}else{var j=cljs.reader.macros(l),u=cljs.core.truth_(j)?j.cljs$core$IFn$_invoke$arity$2?j.cljs$core$IFn$_invoke$arity$2(r,l):j.call(null,r,l):cljs.reader.number_literal_QMARK_(r,l)?cljs.reader.read_number(r,l):cljs.reader.read_symbol(r,l);if(u!==r)return u;var v=r,f=e,y=c,h=a;r=v,e=f,c=y,a=h}}},cljs.reader.read_string=function(r){if("string"!=typeof r)throw new Error("Cannot read from non-string object.");var e=cljs.reader.push_back_reader(r);return cljs.reader.read(e,!1,null,!1)},cljs.reader.zero_fill_right_and_truncate=function(r,e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.count(r)))return r;if(e<cljs.core.count(r))return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(r,0,e);for(var c=new goog.string.StringBuffer(r);;){if(!(c.getLength()<e))return c.toString();var a=c.append("0");c=a}},cljs.reader.divisible_QMARK_=function(r,e){return 0===cljs.core.mod(r,e)},cljs.reader.indivisible_QMARK_=function(r,e){return cljs.core.not(cljs.reader.divisible_QMARK_(r,e))},cljs.reader.leap_year_QMARK_=function(r){var e=cljs.reader.divisible_QMARK_(r,4);if(cljs.core.truth_(e)){var c=cljs.reader.indivisible_QMARK_(r,100);return cljs.core.truth_(c)?c:cljs.reader.divisible_QMARK_(r,400)}return e},cljs.reader.days_in_month=function(){var r=new cljs.core.PersistentVector(null,13,5,cljs.core.PersistentVector.EMPTY_NODE,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),e=new cljs.core.PersistentVector(null,13,5,cljs.core.PersistentVector.EMPTY_NODE,[null,31,29,31,30,31,30,31,31,30,31,30,31],null);return function(r,e){return function(c,a){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.truth_(a)?e:r,c)}}(r,e)}(),cljs.reader.timestamp_regex=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/,cljs.reader.parse_int=function(r){var e=parseInt(r,10);return cljs.core.not(isNaN(e))?e:null},cljs.reader.check=function(r,e,c,a){return r<=e&&e<=c||cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(a),cljs.core.str(" Failed:  "),cljs.core.str(r),cljs.core.str("<="),cljs.core.str(e),cljs.core.str("<="),cljs.core.str(c)].join("")],0)),e},cljs.reader.parse_and_validate_timestamp=function(r){var e=cljs.core.re_matches(cljs.reader.timestamp_regex,r),c=(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,0,null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,1,null)),a=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,2,null),l=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,3,null),n=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,4,null),s=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,5,null),t=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,6,null),o=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,7,null),i=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,8,null),$=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,9,null),d=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,10,null),_=e;if(cljs.core.not(_))return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(r)].join("")],0));var j=cljs.reader.parse_int(c),u=function(){var r=cljs.reader.parse_int(a);return cljs.core.truth_(r)?r:1}(),v=function(){var r=cljs.reader.parse_int(l);return cljs.core.truth_(r)?r:1}(),f=function(){var r=cljs.reader.parse_int(n);return cljs.core.truth_(r)?r:0}(),y=function(){var r=cljs.reader.parse_int(s);return cljs.core.truth_(r)?r:0}(),h=function(){var r=cljs.reader.parse_int(t);return cljs.core.truth_(r)?r:0}(),k=function(){var r=cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(o,3));return cljs.core.truth_(r)?r:0}(),m=cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"-")?-1:1,p=function(){var r=cljs.reader.parse_int($);return cljs.core.truth_(r)?r:0}(),g=function(){var r=cljs.reader.parse_int(d);return cljs.core.truth_(r)?r:0}(),I=m*(60*p+g);return new cljs.core.PersistentVector(null,8,5,cljs.core.PersistentVector.EMPTY_NODE,[j,cljs.reader.check(1,u,12,"timestamp month field must be in range 1..12"),cljs.reader.check(1,v,function(){var r=u,e=cljs.reader.leap_year_QMARK_(j);return cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2?cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(r,e):cljs.reader.days_in_month.call(null,r,e)}(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check(0,f,23,"timestamp hour field must be in range 0..23"),cljs.reader.check(0,y,59,"timestamp minute field must be in range 0..59"),cljs.reader.check(0,h,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,59)?60:59,"timestamp second field must be in range 0..60"),cljs.reader.check(0,k,999,"timestamp millisecond field must be in range 0..999"),I],null)},cljs.reader.parse_timestamp=function(r){var e=cljs.reader.parse_and_validate_timestamp(r);if(cljs.core.truth_(e)){var c=e,a=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,0,null),l=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,1,null),n=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,2,null),s=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,3,null),t=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,4,null),o=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,5,null),i=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,6,null),$=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,7,null);return new Date(Date.UTC(a,l-1,n,s,t,o,i)-60*$*1e3)}return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(r)].join("")],0))},cljs.reader.read_date=function(r){return"string"==typeof r?cljs.reader.parse_timestamp(r):cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."],0))},cljs.reader.read_queue=function(r){return cljs.core.vector_QMARK_(r)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,r):cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."],0))},cljs.reader.read_js=function(r){if(cljs.core.vector_QMARK_(r)){for(var e=[],c=cljs.core.seq(r),a=null,l=0,n=0;;)if(n<l){var s=a.cljs$core$IIndexed$_nth$arity$2(null,n);e.push(s);var t=c,o=a,i=l,$=n+1;c=t,a=o,l=i,n=$}else{var d=cljs.core.seq(c);if(!d)break;var _=d;if(cljs.core.chunked_seq_QMARK_(_)){var j=cljs.core.chunk_first(_),u=cljs.core.chunk_rest(_),v=j,f=cljs.core.count(j),y=0;c=u,a=v,l=f,n=y;continue}var h=cljs.core.first(_);e.push(h);var k=cljs.core.next(_),m=null,p=0,g=0;c=k,a=m,l=p,n=g}return e}if(cljs.core.map_QMARK_(r)){for(var I={},F=cljs.core.seq(r),A=null,R=0,b=0;;)if(b<R){var S=A.cljs$core$IIndexed$_nth$arity$2(null,b),T=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(S,0,null),w=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(S,1,null);I[cljs.core.name(T)]=w;var M=F,P=A,q=R,Q=b+1;F=M,A=P,R=q,b=Q}else{var x=cljs.core.seq(F);if(!x)break;var K=x;if(cljs.core.chunked_seq_QMARK_(K)){var E=cljs.core.chunk_first(K),B=cljs.core.chunk_rest(K),N=E,O=cljs.core.count(E),G=0;F=B,A=N,R=O,b=G;continue}var U=cljs.core.first(K),V=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(U,0,null),C=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(U,1,null);I[cljs.core.name(V)]=C;var D=cljs.core.next(K),Y=null,W=0,z=0;F=D,A=Y,R=W,b=z}return I}return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join("")],0))},cljs.reader.read_uuid=function(r){return"string"==typeof r?cljs.core.uuid(r):cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."],0))},cljs.reader._STAR_tag_table_STAR_=function(){var r=new cljs.core.PersistentArrayMap(null,4,["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js],null);return cljs.core.atom.cljs$core$IFn$_invoke$arity$1?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(r):cljs.core.atom.call(null,r)}(),cljs.reader._STAR_default_data_reader_fn_STAR_=cljs.core.atom.cljs$core$IFn$_invoke$arity$1?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null):cljs.core.atom.call(null,null),cljs.reader.maybe_read_tagged_type=function(r,e){var c=cljs.reader.read_symbol(r,e),a=cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref.cljs$core$IFn$_invoke$arity$1?cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_):cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),[cljs.core.str(c)].join("")),l=cljs.core.deref.cljs$core$IFn$_invoke$arity$1?cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_):cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);if(cljs.core.truth_(a)){var n=cljs.reader.read(r,!0,null,!1);return a.cljs$core$IFn$_invoke$arity$1?a.cljs$core$IFn$_invoke$arity$1(n):a.call(null,n)}if(cljs.core.truth_(l)){var s=c,t=cljs.reader.read(r,!0,null,!1);return l.cljs$core$IFn$_invoke$arity$2?l.cljs$core$IFn$_invoke$arity$2(s,t):l.call(null,s,t)}return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(c)].join("")," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys(cljs.core.deref.cljs$core$IFn$_invoke$arity$1?cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_):cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))],0))],0))},cljs.reader.register_tag_parser_BANG_=function(r,e){var c=[cljs.core.str(r)].join(""),a=cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref.cljs$core$IFn$_invoke$arity$1?cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_):cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),c);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,c,e),a},cljs.reader.deregister_tag_parser_BANG_=function(r){var e=[cljs.core.str(r)].join(""),c=cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref.cljs$core$IFn$_invoke$arity$1?cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_):cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),e);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,e),c},cljs.reader.register_default_tag_parser_BANG_=function(r){var e=cljs.core.deref.cljs$core$IFn$_invoke$arity$1?cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_):cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,function(e){return function(e){return r}}(e)),e},cljs.reader.deregister_default_tag_parser_BANG_=function(){var r=cljs.core.deref.cljs$core$IFn$_invoke$arity$1?cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_):cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,function(r){return function(r){return null}}(r)),r};